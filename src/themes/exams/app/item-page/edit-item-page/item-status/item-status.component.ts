import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeIn, fadeInOut } from '../../../../../../app/shared/animations/fade';
import { ItemStatusComponent as BaseComponent } from '../../../../../../app/item-page/edit-item-page/item-status/item-status.component';
import { TranslateModule } from '@ngx-translate/core';
import { EditItemPageModule } from '../../../../../../app/item-page/edit-item-page/edit-item-page.module';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass, AsyncPipe } from '@angular/common';

@Component({
    selector: 'ds-item-status',
    // templateUrl: './item-status.component.html',
    templateUrl: '../../../../../../app/item-page/edit-item-page/item-status/item-status.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    animations: [
        fadeIn,
        fadeInOut
    ],
    standalone: true,
    imports: [NgFor, NgIf, RouterLink, NgClass, EditItemPageModule, AsyncPipe, TranslateModule]
})
export class ItemStatusComponent extends BaseComponent {
}
