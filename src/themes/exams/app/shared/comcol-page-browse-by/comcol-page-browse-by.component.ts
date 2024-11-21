import { Component } from '@angular/core';
import { ComcolPageBrowseByComponent as BaseComponent} from '../../../../../app/shared/comcol/comcol-page-browse-by/comcol-page-browse-by.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgFor, AsyncPipe } from '@angular/common';

/**
 * A component to display the "Browse By" section of a Community or Collection page
 * It expects the ID of the Community or Collection as input to be passed on as a scope
 */
@Component({
    selector: 'ds-comcol-page-browse-by',
    // styleUrls: ['./comcol-page-browse-by.component.scss'],
    styleUrls: ['../../../../../app/shared/comcol/comcol-page-browse-by/comcol-page-browse-by.component.scss'],
    // templateUrl: './comcol-page-browse-by.component.html'
    templateUrl: '../../../../../app/shared/comcol/comcol-page-browse-by/comcol-page-browse-by.component.html',
    standalone: true,
    imports: [NgFor, RouterLinkActive, RouterLink, FormsModule, AsyncPipe, TranslateModule]
})
export class ComcolPageBrowseByComponent extends BaseComponent {}
