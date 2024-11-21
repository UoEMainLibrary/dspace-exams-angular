import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemPageComponent as BaseComponent } from '../../../../../app/item-page/simple/item-page.component';
import { fadeInOut } from '../../../../../app/shared/animations/fade';
import { TranslateModule } from '@ngx-translate/core';
import { StatisticsModule } from '../../../../../app/statistics/statistics.module';
import { ItemVersionsModule } from '../../../../../app/item-page/versions/item-versions.module';
import { ItemPageModule } from '../../../../../app/item-page/item-page.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

/**
 * This component renders a simple item page.
 * The route parameter 'id' is used to request the item it represents.
 * All fields of the item that should be displayed, are defined in its template.
 */
@Component({
    selector: 'ds-item-page',
    // styleUrls: ['./item-page.component.scss'],
    styleUrls: ['../../../../../app/item-page/simple/item-page.component.scss'],
    // templateUrl: './item-page.component.html',
    templateUrl: '../../../../../app/item-page/simple/item-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeInOut],
    standalone: true,
    imports: [SharedModule, NgIf, ItemPageModule, ItemVersionsModule, StatisticsModule, AsyncPipe, TranslateModule]
})
export class ItemPageComponent extends BaseComponent {

}
