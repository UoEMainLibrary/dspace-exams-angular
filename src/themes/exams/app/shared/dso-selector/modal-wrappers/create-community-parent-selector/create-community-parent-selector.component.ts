import { Component } from '@angular/core';
import {
    CreateCommunityParentSelectorComponent as BaseComponent
} from '../../../../../../../app/shared/dso-selector/modal-wrappers/create-community-parent-selector/create-community-parent-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-create-community-parent-selector',
    // styleUrls: ['./create-community-parent-selector.component.scss'],
    styleUrls: ['../../../../../../../app/shared/dso-selector/modal-wrappers/create-community-parent-selector/create-community-parent-selector.component.scss'],
    // templateUrl: './create-community-parent-selector.component.html',
    templateUrl: '../../../../../../../app/shared/dso-selector/modal-wrappers/create-community-parent-selector/create-community-parent-selector.component.html',
    standalone: true,
    imports: [SharedModule, TranslateModule]
})
export class CreateCommunityParentSelectorComponent extends BaseComponent {
}
