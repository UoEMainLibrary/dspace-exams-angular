import { Component } from '@angular/core';
import { CommunityPageSubCollectionListComponent as BaseComponent }
  from '../../../../../app/community-page/sub-collection-list/community-page-sub-collection-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-community-page-sub-collection-list',
    // styleUrls: ['./community-page-sub-collection-list.component.scss'],
    styleUrls: ['../../../../../app/community-page/sub-collection-list/community-page-sub-collection-list.component.scss'],
    // templateUrl: './community-page-sub-collection-list.component.html',
    templateUrl: '../../../../../app/community-page/sub-collection-list/community-page-sub-collection-list.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, AsyncPipe, TranslateModule]
})
export class CommunityPageSubCollectionListComponent extends BaseComponent {}
