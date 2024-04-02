import { Component, Inject, Input } from '@angular/core';
import {
  listableObjectComponent
} from '../../../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../../../../../app/core/shared/view-mode.model';
import {
  ItemSearchResult
} from '../../../../../../../../../app/shared/object-collection/shared/item-search-result.model';
import {
  ItemSearchResultListElementComponent as BaseComponent
} from '../../../../../../../../../app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component';
import { Context } from '../../../../../../../../../app/core/shared/context.model';

import { BitstreamDataService } from '../../../../../../../../../app/core/data/bitstream-data.service';
import { Bitstream } from '../../../../../../../../../app/core/shared/bitstream.model';
import { Item } from '../../../../../../../../../app/core/shared/item.model';
import { Observable } from 'rxjs';
import { PaginatedList } from '../../../../../../../../../app/core/data/paginated-list.model';
import { RemoteData } from '../../../../../../../../../app/core/data/remote-data';
import { PaginationComponentOptions } from '../../../../../../../../../app/shared/pagination/pagination-component-options.model';
import { PaginationService } from '../../../../../../../../../app/core/pagination/pagination.service';
import { DSONameService } from '../../../../../../../../../app/core/breadcrumbs/dso-name.service';
import { AppConfig, APP_CONFIG } from 'src/config/app-config.interface';
import { NotificationsService } from 'src/app/shared/notifications/notifications.service';
import { TranslateService } from '@ngx-translate/core';


@listableObjectComponent('PublicationSearchResult', ViewMode.ListElement, Context.Any, 'custom')
@listableObjectComponent(ItemSearchResult, ViewMode.ListElement, Context.Any, 'custom')
@Component({
  selector: 'ds-item-search-result-list-element',
  styleUrls: ['./item-search-result-list-element.component.scss'],
  // styleUrls: ['../../../../../../../../../app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component.scss'],
  templateUrl: './item-search-result-list-element.component.html',
  // templateUrl: '../../../../../../../../../app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component.html',
})
export class ItemSearchResultListElementComponent extends BaseComponent {

  @Input() item: Item;

  originals$: Observable<RemoteData<PaginatedList<Bitstream>>>;

  originalOptions = Object.assign(new PaginationComponentOptions(), {
    id: 'obo',
    currentPage: 1,
    pageSize: this.appConfig.item.bitstream.pageSize
  });

  constructor(
    bitstreamDataService: BitstreamDataService,
    protected notificationsService: NotificationsService,
    protected translateService: TranslateService,
    protected paginationService: PaginationService,
    public dsoNameService: DSONameService,
    @Inject(APP_CONFIG) protected appConfig: AppConfig
  ) {
    super(bitstreamDataService, notificationsService, translateService, dsoNameService, appConfig);
  }

  ngOnInit(): void {
    this.initialize();
  }

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
