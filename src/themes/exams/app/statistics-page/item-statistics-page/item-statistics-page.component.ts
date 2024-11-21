import { Component } from '@angular/core';
import { ItemStatisticsPageComponent as BaseComponent } from '../../../../../app/statistics-page/item-statistics-page/item-statistics-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { StatisticsPageModule } from '../../../../../app/statistics-page/statistics-page.module';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-item-statistics-page',
    // styleUrls: ['./item-statistics-page.component.scss'],
    styleUrls: ['../../../../../app/statistics-page/item-statistics-page/item-statistics-page.component.scss'],
    // templateUrl: './item-statistics-page.component.html',
    templateUrl: '../../../../../app/statistics-page/statistics-page/statistics-page.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, NgFor, StatisticsPageModule, AsyncPipe, TranslateModule]
})

/**
 * Component representing the statistics page for an item.
 */
export class ItemStatisticsPageComponent extends BaseComponent {}

