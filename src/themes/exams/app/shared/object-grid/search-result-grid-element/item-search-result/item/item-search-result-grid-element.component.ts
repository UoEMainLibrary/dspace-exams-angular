import { Component } from '@angular/core';
import { focusShadow } from '../../../../../../../../app/shared/animations/focus';
import { ViewMode } from '../../../../../../../../app/core/shared/view-mode.model';
import {
  listableObjectComponent
} from '../../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ItemSearchResult } from '../../../../../../../../app/shared/object-collection/shared/item-search-result.model';
import { ItemSearchResultGridElementComponent as BaseComponent } from '../../../../../../../../app/shared/object-grid/search-result-grid-element/item-search-result/item/item-search-result-grid-element.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../../../../../app/shared/shared.module';
import { RouterLink } from '@angular/router';
import { NgIf, AsyncPipe } from '@angular/common';


@listableObjectComponent('PublicationSearchResult', ViewMode.GridElement)
@listableObjectComponent(ItemSearchResult, ViewMode.GridElement)
@Component({
    selector: 'ds-item-search-result-grid-element',
    styleUrls: ['./item-search-result-grid-element.component.scss'],
    templateUrl: './item-search-result-grid-element.component.html',
    animations: [focusShadow],
    standalone: true,
    imports: [NgIf, RouterLink, SharedModule, AsyncPipe, TranslateModule]
})
/**
 * The component for displaying a grid element for an item search result of the type Publication
 */
export class ItemSearchResultGridElementComponent extends BaseComponent {
}
