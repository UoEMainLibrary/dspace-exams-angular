import { Component } from '@angular/core';
import { fadeIn } from '../../../../../app/shared/animations/fade';
import { SubmissionImportExternalComponent as BaseComponent } from '../../../../../app/submission/import-external/submission-import-external.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../../../../app/shared/shared.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { SubmissionModule } from '../../../../../app/submission/submission.module';

/**
 * This component allows to submit a new workspaceitem importing the data from an external source.
 */
@Component({
    selector: 'ds-submission-import-external',
    // styleUrls: ['./submission-import-external.component.scss'],
    styleUrls: ['../../../../../app/submission/import-external/submission-import-external.component.scss'],
    // templateUrl: './submission-import-external.component.html',
    templateUrl: '../../../../../app/submission/import-external/submission-import-external.component.html',
    animations: [fadeIn],
    standalone: true,
    imports: [SubmissionModule, NgIf, SharedModule, RouterLink, AsyncPipe, TranslateModule]
})
export class SubmissionImportExternalComponent extends BaseComponent {

}
