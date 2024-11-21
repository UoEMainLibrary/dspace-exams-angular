import { Component } from '@angular/core';
import {
  MediaViewerVideoComponent as BaseComponent
} from '../../../../../../app/item-page/media-viewer/media-viewer-video/media-viewer-video.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'ds-media-viewer-video',
    // templateUrl: './media-viewer-video.component.html',
    templateUrl: '../../../../../../app/item-page/media-viewer/media-viewer-video/media-viewer-video.component.html',
    // styleUrls: ['./media-viewer-video.component.scss'],
    styleUrls: ['../../../../../../app/item-page/media-viewer/media-viewer-video/media-viewer-video.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, NgbDropdownModule, TranslateModule]
})
export class MediaViewerVideoComponent extends BaseComponent {
}
