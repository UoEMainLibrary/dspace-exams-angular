import { Component } from '@angular/core';
import {SearchComponent as BaseComponent,} from '../../../../../app/shared/search/search.component';
import { TranslateModule } from '@ngx-translate/core';
import { SearchModule } from '../../../../../app/shared/search/search.module';
import { SharedModule } from '../../../../../app/shared/shared.module';
import { NgIf, NgTemplateOutlet, AsyncPipe } from '@angular/common';

@Component({
    selector: 'ds-search',
    styleUrls: ['./search.component.scss'],
    // styleUrls: ['../../../../../app/shared/search/search/search.component.scss'],
    templateUrl: './search.component.html',
    standalone: true,
    imports: [NgIf, NgTemplateOutlet, SharedModule, SearchModule, AsyncPipe, TranslateModule]
})

export class SearchComponent extends BaseComponent {}
