import { Component } from '@angular/core';
import {
  ItemPageTitleFieldComponent as BaseComponent
} from '../../../../../../../../app/item-page/simple/field-components/specific-field/title/item-page-title-field.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'ds-item-page-title-field',
    // templateUrl: './item-page-title-field.component.html',
    templateUrl: '../../../../../../../../app/item-page/simple/field-components/specific-field/title/item-page-title-field.component.html',
    standalone: true,
    imports: [NgIf, TranslateModule]
})
export class ItemPageTitleFieldComponent extends BaseComponent {
}
