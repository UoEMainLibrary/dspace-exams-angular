import { Component } from '@angular/core';
import { SearchNavbarComponent as BaseComponent } from '../../../../app/search-navbar/search-navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../app/shared/shared.module';

@Component({
    selector: 'ds-search-navbar',
    // styleUrls: ['./search-navbar.component.scss'],
    styleUrls: ['../../../../app/search-navbar/search-navbar.component.scss'],
    // templateUrl: './search-navbar.component.html'
    templateUrl: '../../../../app/search-navbar/search-navbar.component.html',
    standalone: true,
    imports: [SharedModule, FormsModule, ReactiveFormsModule, TranslateModule]
})
export class SearchNavbarComponent extends BaseComponent {

}
