import { Component } from '@angular/core';
import {
    EditItemSelectorComponent as BaseComponent
} from 'src/app/shared/dso-selector/modal-wrappers/edit-item-selector/edit-item-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../../../../app/shared/shared.module';
import { NgIf } from '@angular/common';

@Component({
    selector: 'ds-edit-item-selector',
    // styleUrls: ['./edit-item-selector.component.scss'],
    // templateUrl: './edit-item-selector.component.html',
    templateUrl: '../../../../../../../app/shared/dso-selector/modal-wrappers/dso-selector-modal-wrapper.component.html',
    standalone: true,
    imports: [NgIf, SharedModule, TranslateModule]
})
export class EditItemSelectorComponent extends BaseComponent {
}
