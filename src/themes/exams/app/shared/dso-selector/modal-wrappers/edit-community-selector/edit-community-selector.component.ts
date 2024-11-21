import { Component } from '@angular/core';
import {
    EditCommunitySelectorComponent as BaseComponent
} from '../../../../../../../app/shared/dso-selector/modal-wrappers/edit-community-selector/edit-community-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../../../../app/shared/shared.module';
import { NgIf } from '@angular/common';

@Component({
    selector: 'ds-edit-item-selector',
    // styleUrls: ['./edit-community-selector.component.scss'],
    // templateUrl: './edit-community-selector.component.html',
    templateUrl: '../../../../../../../app/shared/dso-selector/modal-wrappers/dso-selector-modal-wrapper.component.html',
    standalone: true,
    imports: [NgIf, SharedModule, TranslateModule]
})
export class EditCommunitySelectorComponent extends BaseComponent {
}
