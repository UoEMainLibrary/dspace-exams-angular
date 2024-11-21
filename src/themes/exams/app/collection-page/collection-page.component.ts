import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CollectionPageComponent as BaseComponent} from '../../../../app/collection-page/collection-page.component';
import { fadeIn, fadeInOut } from '../../../../app/shared/animations/fade';
import { TranslateModule } from '@ngx-translate/core';
import { DsoPageModule } from '../../../../app/shared/dso-page/dso-page.module';
import { ComcolModule } from '../../../../app/shared/comcol/comcol.module';
import { StatisticsModule } from '../../../../app/statistics/statistics.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../app/shared/shared.module';


@Component({
    selector: 'ds-collection-page',
    // templateUrl: './collection-page.component.html',
    templateUrl: '../../../../app/collection-page/collection-page.component.html',
    // styleUrls: ['./collection-page.component.scss']
    styleUrls: ['../../../../app/collection-page/collection-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        fadeIn,
        fadeInOut
    ],
    standalone: true,
    imports: [SharedModule, NgIf, StatisticsModule, ComcolModule, DsoPageModule, AsyncPipe, TranslateModule]
})
/**
 * This component represents a detail page for a single collection
 */
export class CollectionPageComponent extends BaseComponent {}
