import { Component } from '@angular/core';
import { slideSidebarPadding } from '../../../../../../../app/shared/animations/slide';
import { FileSectionComponent as BaseComponent } from '../../../../../../../app/item-page/simple/field-components/file-section/file-section.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-item-page-file-section',
    // templateUrl: './file-section.component.html',
    templateUrl: '../../../../../../../app/item-page/simple/field-components/file-section/file-section.component.html',
    animations: [slideSidebarPadding],
    standalone: true,
    imports: [SharedModule, NgIf, NgFor, AsyncPipe, TranslateModule]
})
export class FileSectionComponent extends BaseComponent {

}
