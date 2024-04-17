import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  listableObjectComponent
} from '../../../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../../core/shared/view-mode.model';
import {
  ItemSearchResult
} from '../../../../../../shared/object-collection/shared/item-search-result.model';
// import {
//   ItemSearchResultListElementComponent as BaseComponent
// } from '../../../../../../shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component';
import { Context } from '../../../../../../core/shared/context.model';

// Added for search results constructor
import { BehaviorSubject, Observable } from 'rxjs';

import { SearchResult } from '../../../../../../shared/search/models/search-result.model';
import { DSpaceObject } from '../../../../../../core/shared/dspace-object.model';
import { AbstractListableElementComponent } from '../../../../../../shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { TruncatableService } from '../../../../../../shared/truncatable/truncatable.service';
import { Metadata } from '../../../../../../core/shared/metadata.utils';
import { DSONameService } from '../../../../../../core/breadcrumbs/dso-name.service';
import { AppConfig, APP_CONFIG } from '../../../../../../../config/app-config.interface';
import { BitstreamDataService } from '../../../../../../core/data/bitstream-data.service';
import { NotificationsService } from '../../../../../../shared/notifications/notifications.service';
import { PaginationService } from '../../../../../../core/pagination/pagination.service';
import { TranslateService } from '@ngx-translate/core';

//import { getItemPageRoute } from '../../../../../../item-page/item-page-routing-paths';


// Added for download link
import { Bitstream } from '../../../../../../core/shared/bitstream.model';
import { Item } from '../../../../../../core/shared/item.model';
import { PaginatedList } from '../../../../../../core/data/paginated-list.model';
import { RemoteData } from '../../../../../../core/data/remote-data';
import { PaginationComponentOptions } from '../../../../../../shared/pagination/pagination-component-options.model';
import { switchMap, tap } from 'rxjs/operators';
import { followLink } from 'src/app/shared/utils/follow-link-config.model';
import { hasValue } from 'src/app/shared/empty.util';
import { getItemPageRoute } from 'src/app/item-page/item-page-routing-paths';

@listableObjectComponent('PublicationSearchResult', ViewMode.ListElement, Context.Any, 'custom')
@listableObjectComponent(ItemSearchResult, ViewMode.ListElement, Context.Any, 'custom')
@Component({
  selector: 'ds-item-download-search-result-list-element',
  styleUrls: ['./item-download-search-result-list-element.component.scss'],
  // styleUrls: ['../../../../../../shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component.scss'],
  templateUrl: './item-download-search-result-list-element.component.html',
  // templateUrl: '../../../../../../shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component.html',
})
export class ItemDownloadSearchResultListElementComponent <T extends SearchResult<K>, K extends DSpaceObject> extends AbstractListableElementComponent<T> implements OnInit {

  // Added for search results constructor
  /**
    * The DSpaceObject of the search result
    */
  dso
  // dsok: K;
  dsoTitle: string;
  itemPageRoute: string;
  bitstreamDataService

  public constructor( private privatebitstreamDataService: BitstreamDataService,
                      protected notificationsService: NotificationsService,
                      protected translateService: TranslateService,
                      protected truncatableService: TruncatableService,
                      protected paginationService: PaginationService,
                      public dsoNameService: DSONameService,
                      @Inject(APP_CONFIG) protected appConfig?: AppConfig) {
    super(dsoNameService);
  }

  /**
   * Retrieve the dso from the search result
   */
  ngOnInit(): void {
    if (hasValue(this.object)) {
      this.dso = this.object.indexableObject;
      this.dsoTitle = this.dsoNameService.getHitHighlights(this.object, this.dso);
    }

    this.showThumbnails = this.showThumbnails ?? this.appConfig.browseBy.showThumbnails;
    this.itemPageRoute = getItemPageRoute(this.dso);
  }
  

  /**
   * Gets all matching metadata string values from hitHighlights or dso metadata, preferring hitHighlights.
   *
   * @param {string|string[]} keyOrKeys The metadata key(s) in scope. Wildcards are supported; see [[Metadata]].
   * @returns {string[]} the matching string values or an empty array.
   */
  allMetadataValues(keyOrKeys: string | string[]): string[] {
    return Metadata.allValues([this.object.hitHighlights, this.dso.metadata], keyOrKeys);
  }

  /**
   * Gets the first matching metadata string value from hitHighlights or dso metadata, preferring hitHighlights.
   *
   * @param {string|string[]} keyOrKeys The metadata key(s) in scope. Wildcards are supported; see [[Metadata]].
   * @returns {string} the first matching string value, or `undefined`.
   */
  firstMetadataValue(keyOrKeys: string | string[]): string {
    return Metadata.firstValue([this.object.hitHighlights, this.dso.metadata], keyOrKeys);
  }

  /**
   * Emits if the list element is currently collapsed or not
   */
  isCollapsed(): Observable<boolean> {
    return this.truncatableService.isCollapsed(this.dso.id);
  }

  // Added for download link
  @Input() item: Item;
  file: any; // add this
  bitstreams$: BehaviorSubject<Bitstream[]>;
  originals$: Observable<RemoteData<PaginatedList<Bitstream>>>;
  licenses$: Observable<RemoteData<PaginatedList<Bitstream>>>;

  originalOptions = Object.assign(new PaginationComponentOptions(), {
    id: 'obo',
    currentPage: 1,
    pageSize: this.appConfig.item.bitstream.pageSize
  });

  licenseOptions = Object.assign(new PaginationComponentOptions(), {
    id: 'lbo',
    currentPage: 1,
    pageSize: this.appConfig.item.bitstream.pageSize
  });

  initialize(): void {
    this.originals$ = this.paginationService.getCurrentPagination(this.originalOptions.id, this.originalOptions).pipe(
      switchMap((options: PaginationComponentOptions) => this.bitstreamDataService.findAllByItemAndBundleName(
        this.item,
        'ORIGINAL',
        {elementsPerPage: options.pageSize, currentPage: options.currentPage},
        true,
        true,
        followLink('format'),
        followLink('thumbnail'),
      )),
      tap((rd: RemoteData<PaginatedList<Bitstream>>) => {
          if (hasValue(rd.errorMessage)) {
            this.notificationsService.error(this.translateService.get('file-section.error.header'), `${rd.statusCode} ${rd.errorMessage}`);
          }
        }
      )
    );
  }

}

