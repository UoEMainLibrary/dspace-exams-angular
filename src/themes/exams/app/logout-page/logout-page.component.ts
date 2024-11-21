import { Component } from '@angular/core';
import { LogoutPageComponent as BaseComponent} from '../../../../app/logout-page/logout-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../app/shared/shared.module';

@Component({
    selector: 'ds-logout-page',
    // styleUrls: ['./logout-page.component.scss'],
    styleUrls: ['../../../../app/logout-page/logout-page.component.scss'],
    // templateUrl: './logout-page.component.html'
    templateUrl: '../../../../app/logout-page/logout-page.component.html',
    standalone: true,
    imports: [SharedModule, TranslateModule]
})
export class LogoutPageComponent extends BaseComponent {
}
