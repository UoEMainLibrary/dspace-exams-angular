import { Component } from '@angular/core';
import { CommunityStatisticsPageComponent as BaseComponent } from '../../../../../app/statistics-page/community-statistics-page/community-statistics-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { StatisticsPageModule } from '../../../../../app/statistics-page/statistics-page.module';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-collection-statistics-page',
    // styleUrls: ['./community-statistics-page.component.scss'],
    styleUrls: ['../../../../../app/statistics-page/community-statistics-page/community-statistics-page.component.scss'],
    // templateUrl: './community-statistics-page.component.html',
    templateUrl: '../../../../../app/statistics-page/statistics-page/statistics-page.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, NgFor, StatisticsPageModule, AsyncPipe, TranslateModule]
})

/**
 * Component representing the statistics page for a community.
 */
export class CommunityStatisticsPageComponent extends BaseComponent {}

