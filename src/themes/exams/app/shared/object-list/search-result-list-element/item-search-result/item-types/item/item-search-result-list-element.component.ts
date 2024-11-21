import { Component } from '@angular/core';
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
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../../../../../../../../app/shared/shared.module';
import { NgIf } from '@angular/common';

@listableObjectComponent('PublicationSearchResult', ViewMode.ListElement, Context.Any, 'custom')
@listableObjectComponent(ItemSearchResult, ViewMode.ListElement, Context.Any, 'custom')
@Component({
    selector: 'ds-item-search-result-list-element',
    styleUrls: ['./item-search-result-list-element.component.scss'],
    // styleUrls: ['../../../../../../../../../app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component.scss'],
    templateUrl: './item-search-result-list-element.component.html',
    standalone: true,
    imports: [NgIf, SharedModule, RouterLink]
})
export class ItemSearchResultListElementComponent extends BaseComponent {
}
