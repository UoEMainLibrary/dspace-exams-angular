import { Component } from '@angular/core';
import {
    SubmissionSectionUploadFileComponent as BaseComponent
} from 'src/app/submission/sections/upload/file/section-upload-file.component';
import { TranslateModule } from '@ngx-translate/core';
import { SubmissionModule } from '../../../../../../../app/submission/submission.module';
import { SharedModule } from '../../../../../../../app/shared/shared.module';
import { NgIf, AsyncPipe } from '@angular/common';

/**
 * This component represents a single bitstream contained in the submission
 */
@Component({
    selector: 'ds-submission-upload-section-file',
    // styleUrls: ['./section-upload-file.component.scss'],
    styleUrls: ['../../../../../../../app/submission/sections/upload/file/section-upload-file.component.scss'],
    // templateUrl: './section-upload-file.component.html'
    templateUrl: '../../../../../../../app/submission/sections/upload/file/section-upload-file.component.html',
    standalone: true,
    imports: [NgIf, SharedModule, SubmissionModule, AsyncPipe, TranslateModule]
})
export class SubmissionSectionUploadFileComponent
    extends BaseComponent {
}
