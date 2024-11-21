import { Component } from '@angular/core';
import { TopLevelCommunityListComponent as BaseComponent } from '../../../../../app/home-page/top-level-community-list/top-level-community-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-top-level-community-list',
    // styleUrls: ['./top-level-community-list.component.scss'],
    styleUrls: ['../../../../../app/home-page/top-level-community-list/top-level-community-list.component.scss'],
    // templateUrl: './top-level-community-list.component.html'
    templateUrl: '../../../../../app/home-page/top-level-community-list/top-level-community-list.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, AsyncPipe, TranslateModule]
})

export class TopLevelCommunityListComponent extends BaseComponent {}

