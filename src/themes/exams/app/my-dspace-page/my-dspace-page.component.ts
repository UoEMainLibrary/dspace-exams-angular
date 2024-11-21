import { ChangeDetectionStrategy, Component } from '@angular/core';
import { pushInOut } from '../../../../app/shared/animations/push';
import { MyDSpacePageComponent as BaseComponent, SEARCH_CONFIG_SERVICE } from '../../../../app/my-dspace-page/my-dspace-page.component';
import { MyDSpaceConfigurationService } from '../../../../app/my-dspace-page/my-dspace-configuration.service';
import { SearchModule } from '../../../../app/shared/search/search.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { MyDSpacePageModule } from '../../../../app/my-dspace-page/my-dspace-page.module';
import { SharedModule } from '../../../../app/shared/shared.module';

/**
 * This component represents the whole mydspace page
 */
@Component({
    selector: 'ds-my-dspace-page',
    // styleUrls: ['./my-dspace-page.component.scss'],
    styleUrls: ['../../../../app/my-dspace-page/my-dspace-page.component.scss'],
    // templateUrl: './my-dspace-page.component.html',
    templateUrl: '../../../../app/my-dspace-page/my-dspace-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [pushInOut],
    providers: [
        {
            provide: SEARCH_CONFIG_SERVICE,
            useClass: MyDSpaceConfigurationService
        }
    ],
    standalone: true,
    imports: [SharedModule, MyDSpacePageModule, NgIf, SearchModule, AsyncPipe]
})
export class MyDSpacePageComponent extends BaseComponent {
}
