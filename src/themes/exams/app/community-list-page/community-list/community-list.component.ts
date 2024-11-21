import { Component } from '@angular/core';
import { CommunityListComponent as BaseComponent } from '../../../../../app/community-list-page/community-list/community-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { CdkTreeModule } from '@angular/cdk/tree';
import { SharedModule } from '../../../../../app/shared/shared.module';
import { NgIf, NgClass, AsyncPipe } from '@angular/common';

/**
 * A tree-structured list of nodes representing the communities, their subCommunities and collections.
 * Initially only the page-restricted top communities are shown.
 * Each node can be expanded to show its children and all children are also page-limited.
 * More pages of a page-limited result can be shown by pressing a show more node/link.
 * Which nodes were expanded is kept in the store, so this persists across pages.
 */
@Component({
    selector: 'ds-community-list',
    // styleUrls: ['./community-list.component.scss'],
    // templateUrl: './community-list.component.html'
    templateUrl: '../../../../../app/community-list-page/community-list/community-list.component.html',
    standalone: true,
    imports: [NgIf, SharedModule, CdkTreeModule, NgClass, RouterLink, AsyncPipe, TranslateModule]
})
export class CommunityListComponent extends BaseComponent {}

