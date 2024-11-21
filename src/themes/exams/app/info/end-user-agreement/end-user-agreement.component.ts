import { Component } from '@angular/core';
import { EndUserAgreementComponent as BaseComponent } from '../../../../../app/info/end-user-agreement/end-user-agreement.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { InfoModule } from '../../../../../app/info/info.module';

@Component({
    selector: 'ds-end-user-agreement',
    // styleUrls: ['./end-user-agreement.component.scss'],
    styleUrls: ['../../../../../app/info/end-user-agreement/end-user-agreement.component.scss'],
    // templateUrl: './end-user-agreement.component.html'
    templateUrl: '../../../../../app/info/end-user-agreement/end-user-agreement.component.html',
    standalone: true,
    imports: [InfoModule, FormsModule, TranslateModule]
})

/**
 * Component displaying the End User Agreement and an option to accept it
 */
export class EndUserAgreementComponent extends BaseComponent {}

