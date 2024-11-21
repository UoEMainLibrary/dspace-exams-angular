import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeInOut } from '../../../../../app/shared/animations/fade';
import { FullItemPageComponent as BaseComponent } from '../../../../../app/item-page/full/full-item-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { ResultsBackButtonModule } from '../../../../../app/shared/results-back-button/results-back-button.module';
import { RouterLink } from '@angular/router';
import { DsoPageModule } from '../../../../../app/shared/dso-page/dso-page.module';
import { StatisticsModule } from '../../../../../app/statistics/statistics.module';
import { ItemVersionsModule } from '../../../../../app/item-page/versions/item-versions.module';
import { ItemPageModule } from '../../../../../app/item-page/item-page.module';
import { NgIf, NgFor, AsyncPipe, KeyValuePipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

/**
 * This component renders a full item page.
 * The route parameter 'id' is used to request the item it represents.
 */

@Component({
    selector: 'ds-full-item-page',
    // styleUrls: ['./full-item-page.component.scss'],
    styleUrls: ['../../../../../app/item-page/full/full-item-page.component.scss'],
    // templateUrl: './full-item-page.component.html',
    templateUrl: '../../../../../app/item-page/full/full-item-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeInOut],
    standalone: true,
    imports: [SharedModule, NgIf, ItemPageModule, ItemVersionsModule, StatisticsModule, DsoPageModule, RouterLink, NgFor, ResultsBackButtonModule, AsyncPipe, KeyValuePipe, TranslateModule]
})
export class FullItemPageComponent extends BaseComponent {
}
