import { Component } from '@angular/core';
import { CommunityPageSubCommunityListComponent as BaseComponent }
  from '../../../../../app/community-page/sub-community-list/community-page-sub-community-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-community-page-sub-community-list',
    // styleUrls: ['./community-page-sub-community-list.component.scss'],
    styleUrls: ['../../../../../app/community-page/sub-community-list/community-page-sub-community-list.component.scss'],
    // templateUrl: './community-page-sub-community-list.component.html',
    templateUrl: '../../../../../app/community-page/sub-community-list/community-page-sub-community-list.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, AsyncPipe, TranslateModule]
})
export class CommunityPageSubCommunityListComponent extends BaseComponent {}
