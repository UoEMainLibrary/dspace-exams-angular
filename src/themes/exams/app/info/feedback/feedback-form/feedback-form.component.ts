import { Component } from '@angular/core';
import {
  FeedbackFormComponent as BaseComponent
} from '../../../../../../app/info/feedback/feedback-form/feedback-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../../../app/shared/shared.module';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'ds-feedback-form',
    // templateUrl: './feedback-form.component.html',
    templateUrl: '../../../../../../app/info/feedback/feedback-form/feedback-form.component.html',
    // styleUrls: ['./feedback-form.component.scss'],
    styleUrls: ['../../../../../../app/info/feedback/feedback-form/feedback-form.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf, SharedModule, TranslateModule]
})
export class FeedbackFormComponent extends BaseComponent {
}
