import { Component } from '@angular/core';
import { ViewMode } from '../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { Item } from '../../../../../../app/core/shared/item.model';
import { ItemListElementComponent as BaseComponent } from '../../../../../../app/shared/object-list/item-list-element/item-types/item/item-list-element.component';

@listableObjectComponent('Publication', ViewMode.ListElement)
@listableObjectComponent(Item, ViewMode.ListElement)
@Component({
  selector: 'ds-item-list-element',
  styleUrls: ['./item-list-element.component.scss'],
  templateUrl: './item-list-element.component.html'
})
/**
 * The component for displaying a list element for an item of the type Publication
 */
export class ItemListElementComponent extends BaseComponent {
}
