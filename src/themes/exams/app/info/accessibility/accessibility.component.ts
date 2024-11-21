import { Component } from '@angular/core';
import { AccessibilityComponent as BaseComponent } from '../../../../../app/info/accessibility/accessibility.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'ds-accessibility',
    templateUrl: './accessibility.component.html',
    styleUrls: ['./accessibility.component.scss'],
    standalone: true,
    imports: [RouterLink]
})

export class AccessibilityComponent extends BaseComponent {}
