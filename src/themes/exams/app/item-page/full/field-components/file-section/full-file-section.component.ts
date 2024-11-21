import { Component } from '@angular/core';
import {
  FullFileSectionComponent as BaseComponent
} from '../../../../../../../app/item-page/full/field-components/file-section/full-file-section.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-item-page-full-file-section',
    // styleUrls: ['./full-file-section.component.scss'],
    styleUrls: ['../../../../../../../app/item-page/full/field-components/file-section/full-file-section.component.scss'],
    // templateUrl: './full-file-section.component.html',
    templateUrl: '../../../../../../../app/item-page/full/field-components/file-section/full-file-section.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, NgFor, AsyncPipe, TranslateModule]
})
export class FullFileSectionComponent extends BaseComponent {
}
