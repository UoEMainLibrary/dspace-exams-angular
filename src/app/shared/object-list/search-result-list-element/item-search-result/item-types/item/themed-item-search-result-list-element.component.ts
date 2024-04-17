import { Component } from '@angular/core';
import { ThemedComponent } from '../../../../../../shared/theme-support/themed.component';
import { ItemSearchResultListElementComponent } from './item-search-result-list-element.component';

/**
 * Themed wrapper for ItemSearchResultListElementComponent
 */
@Component({
  selector: 'ds-themed-item-search-result-list-element',
  styleUrls: [],
  templateUrl: '../shared/theme-support/themed.component.html',
})
export class ThemedItemSearchResultListElementComponent extends ThemedComponent<ItemSearchResultListElementComponent> {
  protected getComponentName(): string {
    return 'ItemSearchResultListElementComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../themes/${themeName}/app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import('./item-search-result-list-element.component');
  }
}
