import { Component } from '@angular/core';
import {
  AuthNavMenuComponent as BaseComponent,
} from '../../../../../app/shared/auth-nav-menu/auth-nav-menu.component';
import { fadeInOut, fadeOut } from '../../../../../app/shared/animations/fade';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SharedModule } from '../../../../../app/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgClass, NgIf, AsyncPipe } from '@angular/common';

/**
 * Component representing the {@link AuthNavMenuComponent} of a page
 */
@Component({
    selector: 'ds-auth-nav-menu',
    // templateUrl: 'auth-nav-menu.component.html',
    templateUrl: '../../../../../app/shared/auth-nav-menu/auth-nav-menu.component.html',
    // styleUrls: ['auth-nav-menu.component.scss'],
    styleUrls: ['../../../../../app/shared/auth-nav-menu/auth-nav-menu.component.scss'],
    animations: [fadeInOut, fadeOut],
    standalone: true,
    imports: [NgClass, NgIf, NgbDropdownModule, SharedModule, RouterLink, RouterLinkActive, AsyncPipe, TranslateModule]
})
export class AuthNavMenuComponent extends BaseComponent {
}
