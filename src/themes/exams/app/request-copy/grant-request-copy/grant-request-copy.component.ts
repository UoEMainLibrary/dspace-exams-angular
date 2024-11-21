import { Component } from '@angular/core';
import {
    GrantRequestCopyComponent as BaseComponent
} from 'src/app/request-copy/grant-request-copy/grant-request-copy.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RequestCopyModule } from '../../../../../app/request-copy/request-copy.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-grant-request-copy',
    // styleUrls: ['./grant-request-copy.component.scss'],
    styleUrls: [],
    // templateUrl: './grant-request-copy.component.html',
    templateUrl: './../../../../../app/request-copy/grant-request-copy/grant-request-copy.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, RequestCopyModule, FormsModule, AsyncPipe, TranslateModule]
})
export class GrantRequestCopyComponent
    extends BaseComponent {
}
