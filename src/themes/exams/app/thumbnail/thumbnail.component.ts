import { Component } from '@angular/core';
import { ThumbnailComponent as BaseComponent } from '../../../../app/thumbnail/thumbnail.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgClass, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../app/shared/shared.module';

@Component({
    selector: 'ds-thumbnail',
    // styleUrls: ['./thumbnail.component.scss'],
    styleUrls: ['../../../../app/thumbnail/thumbnail.component.scss'],
    // templateUrl: './thumbnail.component.html',
    templateUrl: '../../../../app/thumbnail/thumbnail.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, NgClass, AsyncPipe, TranslateModule]
})
export class ThumbnailComponent extends BaseComponent {
}
