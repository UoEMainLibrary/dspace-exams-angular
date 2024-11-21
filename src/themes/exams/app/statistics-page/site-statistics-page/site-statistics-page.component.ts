import { Component } from '@angular/core';
import { SiteStatisticsPageComponent as BaseComponent } from '../../../../../app/statistics-page/site-statistics-page/site-statistics-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { StatisticsPageModule } from '../../../../../app/statistics-page/statistics-page.module';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-site-statistics-page',
    // styleUrls: ['./site-statistics-page.component.scss'],
    styleUrls: ['../../../../../app/statistics-page/site-statistics-page/site-statistics-page.component.scss'],
    // templateUrl: './site-statistics-page.component.html',
    templateUrl: '../../../../../app/statistics-page/statistics-page/statistics-page.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, NgFor, StatisticsPageModule, AsyncPipe, TranslateModule]
})

/**
 * Component representing the site-wide statistics page.
 */
export class SiteStatisticsPageComponent extends BaseComponent {}

