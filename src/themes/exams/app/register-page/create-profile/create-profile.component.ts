import { Component } from '@angular/core';
import { CreateProfileComponent as BaseComponent } from '../../../../../app/register-page/create-profile/create-profile.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProfilePageModule } from '../../../../../app/profile-page/profile-page.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

/**
 * Component that renders the create profile page to be used by a user registering through a token
 */
@Component({
    selector: 'ds-create-profile',
    // styleUrls: ['./create-profile.component.scss'],
    styleUrls: ['../../../../../app/register-page/create-profile/create-profile.component.scss'],
    // templateUrl: './create-profile.component.html'
    templateUrl: '../../../../../app/register-page/create-profile/create-profile.component.html',
    standalone: true,
    imports: [NgIf, FormsModule, ReactiveFormsModule, NgFor, ProfilePageModule, AsyncPipe, TranslateModule]
})
export class CreateProfileComponent extends BaseComponent {
}
