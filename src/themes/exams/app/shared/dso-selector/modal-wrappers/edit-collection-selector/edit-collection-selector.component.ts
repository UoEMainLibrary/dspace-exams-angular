import { Component } from '@angular/core';
import {
    EditCollectionSelectorComponent as BaseComponent
} from '../../../../../../../app/shared/dso-selector/modal-wrappers/edit-collection-selector/edit-collection-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../../../../app/shared/shared.module';
import { NgIf } from '@angular/common';

@Component({
    selector: 'ds-edit-collection-selector',
    // styleUrls: ['./edit-collection-selector.component.scss'],
    // templateUrl: './edit-collection-selector.component.html',
    templateUrl: '../../../../../../../app/shared/dso-selector/modal-wrappers/dso-selector-modal-wrapper.component.html',
    standalone: true,
    imports: [NgIf, SharedModule, TranslateModule]
})
export class EditCollectionSelectorComponent extends BaseComponent {
}
