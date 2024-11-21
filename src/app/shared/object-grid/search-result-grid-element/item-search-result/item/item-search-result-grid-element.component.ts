import { Component } from '@angular/core';
import { focusShadow } from '../../../../animations/focus';
import { ViewMode } from '../../../../../core/shared/view-mode.model';
import {
  listableObjectComponent
} from '../../../../object-collection/shared/listable-object/listable-object.decorator';
import { SearchResultGridElementComponent } from '../../search-result-grid-element.component';
import { Item } from '../../../../../core/shared/item.model';
import { ItemSearchResult } from '../../../../object-collection/shared/item-search-result.model';
import { getItemPageRoute } from '../../../../../item-page/item-page-routing-paths';
import { DSONameService } from '../../../../../core/breadcrumbs/dso-name.service';
import { TruncatableService } from '../../../../truncatable/truncatable.service';
import { BitstreamDataService } from '../../../../../core/data/bitstream-data.service';

/* Added for download link customisation */
import { Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from 'src/config/app-config.interface';
import { getBitstreamDownloadRoute } from '../../../../../app-routing-paths';

@listableObjectComponent('PublicationSearchResult', ViewMode.GridElement)
@listableObjectComponent(ItemSearchResult, ViewMode.GridElement)
@Component({
  selector: 'ds-item-search-result-grid-element',
  styleUrls: ['./item-search-result-grid-element.component.scss'],
  templateUrl: './item-search-result-grid-element.component.html',
  animations: [focusShadow]
})
/**
 * The component for displaying a grid element for an item search result of the type Publication
 * Customised to get item bitstreams to generate a download link
 */
export class ItemSearchResultGridElementComponent extends SearchResultGridElementComponent<ItemSearchResult, Item> {
  /**
   * Route to the item's page
   */
  itemPageRoute: string;

  dsoTitle: string;

  /**
   * Exam paper link.
   */
  examPaperLink = '';

  constructor(
    public dsoNameService: DSONameService,
    public truncatableService: TruncatableService,
    public bitstreamDataService: BitstreamDataService,
    @Inject(APP_CONFIG) protected appConfig?: AppConfig,
  ) {
    super(dsoNameService, truncatableService, bitstreamDataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.itemPageRoute = getItemPageRoute(this.dso);
    this.dsoTitle = this.dsoNameService.getHitHighlights(this.object, this.dso);

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
  }
}
