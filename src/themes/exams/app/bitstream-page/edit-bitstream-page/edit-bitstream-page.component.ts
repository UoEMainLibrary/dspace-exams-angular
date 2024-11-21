import { EditBitstreamPageComponent as BaseComponent } from '../../../../../app/bitstream-page/edit-bitstream-page/edit-bitstream-page.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../../../../../app/shared/form/form.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-edit-bitstream-page',
    // styleUrls: ['./edit-bitstream-page.component.scss'],
    styleUrls: ['../../../../../app/bitstream-page/edit-bitstream-page/edit-bitstream-page.component.scss'],
    // templateUrl: './edit-bitstream-page.component.html',
    templateUrl: '../../../../../app/bitstream-page/edit-bitstream-page/edit-bitstream-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [SharedModule, NgIf, FormModule, FormsModule, ReactiveFormsModule, RouterLink, AsyncPipe, TranslateModule]
})
export class EditBitstreamPageComponent extends BaseComponent {
}
