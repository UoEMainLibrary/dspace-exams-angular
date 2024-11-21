import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommunityPageComponent as BaseComponent} from '../../../../app/community-page/community-page.component';
import { fadeInOut } from '../../../../app/shared/animations/fade';
import { TranslateModule } from '@ngx-translate/core';
import { CommunityPageModule } from '../../../../app/community-page/community-page.module';
import { DsoPageModule } from '../../../../app/shared/dso-page/dso-page.module';
import { ComcolModule } from '../../../../app/shared/comcol/comcol.module';
import { StatisticsModule } from '../../../../app/statistics/statistics.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../app/shared/shared.module';


@Component({
    selector: 'ds-community-page',
    // templateUrl: './community-page.component.html',
    templateUrl: '../../../../app/community-page/community-page.component.html',
    // styleUrls: ['./community-page.component.scss']
    styleUrls: ['../../../../app/community-page/community-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeInOut],
    standalone: true,
    imports: [SharedModule, NgIf, StatisticsModule, ComcolModule, DsoPageModule, CommunityPageModule, AsyncPipe, TranslateModule]
})
/**
 * This component represents a detail page for a single community
 */
export class CommunityPageComponent extends BaseComponent {}
