import { Component, Inject, Input, OnInit } from '@angular/core';
import { listableObjectComponent } from '../../../../../object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../../core/shared/view-mode.model';
import { ItemSearchResult } from '../../../../../object-collection/shared/item-search-result.model';
import { SearchResultListElementComponent } from '../../../search-result-list-element.component';
import { Item } from '../../../../../../core/shared/item.model';
import { getItemPageRoute } from '../../../../../../item-page/item-page-routing-paths';

// Added for download link
import { Bitstream } from '../../../../../../core/shared/bitstream.model';
import { PaginatedList } from '../../../../../../core/data/paginated-list.model';
import { RemoteData } from '../../../../../../core/data/remote-data';
import { PaginationComponentOptions } from '../../../../../../shared/pagination/pagination-component-options.model';
import { switchMap, tap } from 'rxjs/operators';
import { followLink } from 'src/app/shared/utils/follow-link-config.model';
import { hasValue } from 'src/app/shared/empty.util';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchResult } from '../../../../../../shared/search/models/search-result.model';
import { DSpaceObject } from '../../../../../../core/shared/dspace-object.model';
import { AbstractListableElementComponent } from '../../../../../../shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { TruncatableService } from '../../../../../../shared/truncatable/truncatable.service';
import { Metadata } from '../../../../../../core/shared/metadata.utils';
import { AppConfig, APP_CONFIG } from '../../../../../../../config/app-config.interface';
import { BitstreamDataService } from '../../../../../../core/data/bitstream-data.service';
import { NotificationsService } from '../../../../../../shared/notifications/notifications.service';
import { PaginationService } from '../../../../../../core/pagination/pagination.service';
import { TranslateService } from '@ngx-translate/core';
import { DSONameService } from '../../../../../../core/breadcrumbs/dso-name.service';



@listableObjectComponent('PublicationSearchResult', ViewMode.ListElement)
@listableObjectComponent(ItemSearchResult, ViewMode.ListElement)
@Component({
  selector: 'ds-item-search-result-list-element',
  styleUrls: ['../../../../../../../themes/exams/app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component.scss'],
  templateUrl: '../../../../../../../themes/exams/app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component.html'
})
/**
 * The component for displaying a list element for an item search result of the type Publication
 */
export class ItemSearchResultListElementComponent extends SearchResultListElementComponent<ItemSearchResult, Item> {
  /**
   * Route to the item's page
   */
  itemPageRoute: string;

  /**
   * Exam paper link.
   */
  examPaperLink: string;
  private bitstreamDataService: BitstreamDataService;
  private notificationsService: NotificationsService;
  private paginationService: PaginationService;
  private translateService: TranslateService;

  ngOnInit(): void {
    super.ngOnInit();
    this.showThumbnails = this.showThumbnails ?? this.appConfig.browseBy.showThumbnails;
    this.itemPageRoute = getItemPageRoute(this.dso);
    this.examPaperLink = '/bitstreams/94c655f1-13c1-450d-81c5-cf662b5d6eef/download';
  }



  // Added for download link
  @Input() item: Item;
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
