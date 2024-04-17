import { Component } from '@angular/core';
import { ThemedComponent } from '../../../../../theme-support/themed.component';
import { ItemDownloadSearchResultListElementComponent } from './item-download-search-result-list-element.component';

/**
 * Themed wrapper for ItemDownloadSearchResultListElementComponent
 */
@Component({
  selector: 'ds-themed-item-download-search-result-list-element',
  styleUrls: [],
  templateUrl: '../shared/theme-support/themed.component.html',
})
export class ThemedItemDownloadSearchResultListElementComponent extends ThemedComponent<ItemDownloadSearchResultListElementComponent<any, any>> {
  protected getComponentName(): string {
    return 'ItemDownloadSearchResultListElementComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../themes/${themeName}/app/shared/object-list/search-result-list-element/item-search-result/item-types/item-download/item-download-search-result-list-element.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import('./item-download-search-result-list-element.component');
  }
}
