import { Component } from '@angular/core';
import {
  SearchFormComponent as BaseComponent,
} from '../../../../../app/shared/search-form/search-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../../app/shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'ds-search-form',
    // styleUrls: ['./search-form.component.scss'],
    styleUrls: ['../../../../../app/shared/search-form/search-form.component.scss'],
    // templateUrl: './search-form.component.html',
    templateUrl: '../../../../../app/shared/search-form/search-form.component.html',
    standalone: true,
    imports: [FormsModule, NgIf, NgbTooltipModule, AsyncPipe, SharedModule, TranslateModule]
})
export class SearchFormComponent extends BaseComponent {
}
