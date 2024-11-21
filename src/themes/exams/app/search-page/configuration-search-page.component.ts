import { ChangeDetectionStrategy, Component } from '@angular/core';
import { pushInOut } from '../../../../app/shared/animations/push';
import { SEARCH_CONFIG_SERVICE } from '../../../../app/my-dspace-page/my-dspace-page.component';
import { SearchConfigurationService } from '../../../../app/core/shared/search/search-configuration.service';
import { ConfigurationSearchPageComponent as BaseComponent } from '../../../../app/search-page/configuration-search-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { SearchModule } from '../../../../app/shared/search/search.module';
import { SharedModule } from '../../../../app/shared/shared.module';
import { NgIf, NgTemplateOutlet, AsyncPipe } from '@angular/common';

@Component({
    selector: 'ds-configuration-search-page',
    // styleUrls: ['./configuration-search-page.component.scss'],
    styleUrls: ['../../../../app/shared/search/search.component.scss'],
    // templateUrl: './configuration-search-page.component.html'
    templateUrl: '../../../../app/shared/search/search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [pushInOut],
    providers: [
        {
            provide: SEARCH_CONFIG_SERVICE,
            useClass: SearchConfigurationService
        }
    ],
    standalone: true,
    imports: [NgIf, NgTemplateOutlet, SharedModule, SearchModule, AsyncPipe, TranslateModule]
})

/**
 * This component renders a search page using a configuration as input.
 */
export class ConfigurationSearchPageComponent extends BaseComponent {}

