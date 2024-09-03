import { Component } from '@angular/core';
import {SearchComponent as BaseComponent,} from '../../../../../app/shared/search/search.component';

@Component({
  selector: 'ds-search',
  styleUrls: ['./search.component.scss'],
  // styleUrls: ['../../../../../app/shared/search/search/search.component.scss'],
  templateUrl: './search.component.html',
  // templateUrl: '../../../../../../app/shared/search/search/search.component.html',

})

export class SearchComponent extends BaseComponent {}
