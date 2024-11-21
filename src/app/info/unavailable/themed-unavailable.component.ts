import { Component } from '@angular/core';
import { ThemedComponent } from '../../shared/theme-support/themed.component';
import { UnavailableComponent } from './unavailable.component';

/**
 * Themed wrapper for Component
 */
@Component({
  selector: 'ds-themed-unavailable',
  styleUrls: [],
  templateUrl: '../../shared/theme-support/themed.component.html',
})
export class ThemedUnavailableComponent extends ThemedComponent<UnavailableComponent> {
  protected getComponentName(): string {
    return 'UnavailableComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../../themes/${themeName}/app/info/unavailable/unavailable.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import(`./unavailable.component`);
  }

}
