import { SearchResultsComponent as BaseComponent } from '../../../../../../app/shared/search/search-results/search-results.component';
import { Component } from '@angular/core';
import { fadeIn, fadeInOut } from '../../../../../../app/shared/animations/fade';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../../../../../app/shared/shared.module';
import { NgIf } from '@angular/common';

@Component({
    selector: 'ds-search-results',
    // templateUrl: './search-results.component.html',
    templateUrl: '../../../../../../app/shared/search/search-results/search-results.component.html',
    // styleUrls: ['./search-results.component.scss'],
    animations: [
        fadeIn,
        fadeInOut
    ],
    standalone: true,
    imports: [NgIf, SharedModule, RouterLink, TranslateModule]
})
export class SearchResultsComponent extends BaseComponent {

}
