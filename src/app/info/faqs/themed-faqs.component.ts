import { Component } from '@angular/core';
import { ThemedComponent } from '../../shared/theme-support/themed.component';
import { FaqsComponent } from './faqs.component';

/**
 * Themed wrapper for Component
 */
@Component({
  selector: 'ds-themed-faqs',
  styleUrls: [],
  templateUrl: '../../shared/theme-support/themed.component.html',
})
export class ThemedFaqsComponent extends ThemedComponent<FaqsComponent> {
  protected getComponentName(): string {
    return 'FaqsComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../../themes/${themeName}/app/info/faqs/faqs.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import(`./faqs.component`);
  }

}
