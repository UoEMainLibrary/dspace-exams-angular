import { Component } from '@angular/core';
import { PrivacyComponent as BaseComponent } from '../../../../../app/info/privacy/privacy.component';
import { InfoModule } from '../../../../../app/info/info.module';

@Component({
    selector: 'ds-privacy',
    // styleUrls: ['./privacy.component.scss'],
    styleUrls: ['../../../../../app/info/privacy/privacy.component.scss'],
    // templateUrl: './privacy.component.html'
    templateUrl: '../../../../../app/info/privacy/privacy.component.html',
    standalone: true,
    imports: [InfoModule]
})

/**
 * Component displaying the Privacy Statement
 */
export class PrivacyComponent extends BaseComponent {}
