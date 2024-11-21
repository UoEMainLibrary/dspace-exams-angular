import { Component } from '@angular/core';
import { ProfilePageComponent as BaseComponent } from '../../../../app/profile-page/profile-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProfilePageModule } from '../../../../app/profile-page/profile-page.module';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../app/shared/shared.module';

@Component({
    selector: 'ds-profile-page',
    // styleUrls: ['./profile-page.component.scss'],
    styleUrls: ['../../../../app/profile-page/profile-page.component.scss'],
    // templateUrl: './profile-page.component.html'
    templateUrl: '../../../../app/profile-page/profile-page.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, ProfilePageModule, NgFor, AsyncPipe, TranslateModule]
})
/**
 * Component for a user to edit their profile information
 */
export class ProfilePageComponent extends BaseComponent {

}
