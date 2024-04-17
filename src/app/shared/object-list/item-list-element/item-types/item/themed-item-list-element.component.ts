import { Component } from '@angular/core';
import { ThemedComponent } from '../../../../../shared/theme-support/themed.component';
import { ItemListElementComponent } from './item-list-element.component';

/**
 * Themed wrapper for ItemListElementComponent
 */
@Component({
  selector: 'ds-themed-item-list-element',
  styleUrls: [],
  templateUrl: '../../../../../shared/theme-support/themed.component.html',
})
export class ThemedItemListElementComponent extends ThemedComponent<ItemListElementComponent> {
  protected getComponentName(): string {
    return 'ItemListElementComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../themes/${themeName}/app/shared/object-list/item-list-element/item-types/item/item-list-element.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import('./item-list-element.component');
  }
}
