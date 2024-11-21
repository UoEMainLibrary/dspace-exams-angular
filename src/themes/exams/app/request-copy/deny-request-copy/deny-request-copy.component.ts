import { Component } from '@angular/core';
import {
    DenyRequestCopyComponent as BaseComponent
} from 'src/app/request-copy/deny-request-copy/deny-request-copy.component';
import { TranslateModule } from '@ngx-translate/core';
import { RequestCopyModule } from '../../../../../app/request-copy/request-copy.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-deny-request-copy',
    // styleUrls: ['./deny-request-copy.component.scss'],
    styleUrls: [],
    // templateUrl: './deny-request-copy.component.html',
    templateUrl: './../../../../../app/request-copy/deny-request-copy/deny-request-copy.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, RequestCopyModule, AsyncPipe, TranslateModule]
})
export class DenyRequestCopyComponent
    extends BaseComponent {
}
