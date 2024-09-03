import { Component } from '@angular/core';
import { Item } from '../../../../../../core/shared/item.model';
import { ViewMode } from '../../../../../../core/shared/view-mode.model';
import { getItemPageRoute } from '../../../../../../item-page/item-page-routing-paths';
import { ItemSearchResult } from '../../../../../object-collection/shared/item-search-result.model';
import { listableObjectComponent } from '../../../../../object-collection/shared/listable-object/listable-object.decorator';
import { SearchResultListElementComponent } from '../../../search-result-list-element.component';

/* Added for download link customisation */
import { Inject } from '@angular/core';
import { BitstreamDataService } from '../../../../../../core/data/bitstream-data.service';
import { DSONameService } from 'src/app/core/breadcrumbs/dso-name.service';
import { TruncatableService } from 'src/app/shared/truncatable/truncatable.service';
import { APP_CONFIG, AppConfig } from 'src/config/app-config.interface';
import { getBitstreamDownloadRoute } from '../../../../../../app-routing-paths';

@listableObjectComponent('PublicationSearchResult', ViewMode.ListElement)
@listableObjectComponent(ItemSearchResult, ViewMode.ListElement)
@Component({
  selector: 'ds-item-search-result-list-element',
  styleUrls: ['../../../../../../../themes/exams/app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component.scss'],
  templateUrl: '../../../../../../../themes/exams/app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component.html',
  providers: [BitstreamDataService],
})
/**
 * The component for displaying a list element for an item search result of the type Publication
 * Customised to get item bitstreams to generate a download link
 */
export class ItemSearchResultListElementComponent extends SearchResultListElementComponent<ItemSearchResult, Item> {

  /**
   * Route to the item's page
   */
  itemPageRoute: string;

  /**
   * Exam paper link.
   */
  examPaperLink = '';

  /**
   * Search strings to be used for 'all papers from this course title link
   * searchString is root seach url
   * queryString is the query string to be appended to root search url
   */
  searchString = '/search';
  queryString: string; 

  /**
   * Constrctor added to initiate components required for download link
   */
  public constructor(protected truncatableService: TruncatableService,
    public dsoNameService: DSONameService,
    @Inject(APP_CONFIG) protected appConfig?: AppConfig,
    public bitstreamDataService?: BitstreamDataService ) {
    super(truncatableService, dsoNameService, appConfig, bitstreamDataService)
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.showThumbnails = this.showThumbnails ?? this.appConfig.browseBy.showThumbnails;
    this.itemPageRoute = getItemPageRoute(this.dso);

    /**
     * Attempt to get Bundle 'ORIGINAL' and use bitstream to generate download link
     * opperates under the assumption there is only ever one bitstream attached to an item
     */
    try{
      this.bitstreamDataService.findAllByItemAndBundleName(this.dso, 'ORIGINAL', { currentPage: 1, elementsPerPage: 1 })
        .subscribe((bi) => {
          this.examPaperLink = getBitstreamDownloadRoute(bi.payload.page[0]);
        });
      } catch (error) {
        // do nothing if no bitstreams are found
      }

      // Attempt to get item title and format queryString replacing/removing special characters
      try{
        this.queryString = this.dso.firstMetadataValue('dc.title').replace('-', ' ');
        this.queryString = '\"' + this.queryString.replace(/[^\w\s]/gi, '') + '\"';
      }
      catch (error) {
        // do nothing if no title is found
      }
  }

}
