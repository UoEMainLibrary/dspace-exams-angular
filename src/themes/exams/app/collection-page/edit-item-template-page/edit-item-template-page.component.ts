import { Component } from '@angular/core';
import {
  EditItemTemplatePageComponent as BaseComponent
} from '../../../../../app/collection-page/edit-item-template-page/edit-item-template-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { DsoSharedModule } from '../../../../../app/dso-shared/dso-shared.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-edit-item-template-page',
    styleUrls: ['./edit-item-template-page.component.scss'],
    // templateUrl: './edit-item-template-page.component.html',
    templateUrl: '../../../../../app/collection-page/edit-item-template-page/edit-item-template-page.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, DsoSharedModule, RouterLink, AsyncPipe, TranslateModule]
})
/**
 * Component for editing the item template of a collection
 */
export class EditItemTemplatePageComponent extends BaseComponent {
}
