import {
  CollectionDropdownComponent as BaseComponent
} from '../../../../../app/shared/collection-dropdown/collection-dropdown.component';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../../app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'ds-collection-dropdown',
    templateUrl: '../../../../../app/shared/collection-dropdown/collection-dropdown.component.html',
    // templateUrl: './collection-dropdown.component.html',
    styleUrls: ['../../../../../app/shared/collection-dropdown/collection-dropdown.component.scss']
    // styleUrls: ['./collection-dropdown.component.scss']
    ,
    standalone: true,
    imports: [NgIf, FormsModule, ReactiveFormsModule, InfiniteScrollModule, NgFor, SharedModule, AsyncPipe, TranslateModule]
})
export class CollectionDropdownComponent extends BaseComponent {

}
