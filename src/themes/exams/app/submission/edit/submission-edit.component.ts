import { Component } from '@angular/core';
import { SubmissionEditComponent as BaseComponent } from '../../../../../app/submission/edit/submission-edit.component';
import { SubmissionModule } from '../../../../../app/submission/submission.module';

/**
 * This component allows to edit an existing workspaceitem/workflowitem.
 */
@Component({
    selector: 'ds-submission-edit',
    // styleUrls: ['./submission-edit.component.scss'],
    styleUrls: ['../../../../../app/submission/edit/submission-edit.component.scss'],
    // templateUrl: './submission-edit.component.html'
    templateUrl: '../../../../../app/submission/edit/submission-edit.component.html',
    standalone: true,
    imports: [SubmissionModule]
})
export class SubmissionEditComponent extends BaseComponent {
}
