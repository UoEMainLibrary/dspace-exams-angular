import { Component } from '@angular/core';
import {
  MediaViewerComponent as BaseComponent
} from '../../../../../app/item-page/media-viewer/media-viewer.component';
import { TranslateModule } from '@ngx-translate/core';
import { ThumbnailComponent } from '../../thumbnail/thumbnail.component';
import { ItemPageModule } from '../../../../../app/item-page/item-page.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-media-viewer',
    // templateUrl: './media-viewer.component.html',
    templateUrl: '../../../../../app/item-page/media-viewer/media-viewer.component.html',
    // styleUrls: ['./media-viewer.component.scss'],
    styleUrls: ['../../../../../app/item-page/media-viewer/media-viewer.component.scss'],
    standalone: true,
    imports: [SharedModule, NgIf, ItemPageModule, ThumbnailComponent, AsyncPipe, TranslateModule]
})
export class MediaViewerComponent extends BaseComponent {
}
