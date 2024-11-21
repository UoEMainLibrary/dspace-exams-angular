import { Component } from '@angular/core';
import { BrowseByTaxonomyPageComponent as BaseComponent } from '../../../../../app/browse-by/browse-by-taxonomy-page/browse-by-taxonomy-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { FormModule } from '../../../../../app/shared/form/form.module';

@Component({
    selector: 'ds-browse-by-taxonomy-page',
    // templateUrl: './browse-by-taxonomy-page.component.html',
    templateUrl: '../../../../../app/browse-by/browse-by-taxonomy-page/browse-by-taxonomy-page.component.html',
    // styleUrls: ['./browse-by-taxonomy-page.component.scss'],
    styleUrls: ['../../../../../app/browse-by/browse-by-taxonomy-page/browse-by-taxonomy-page.component.scss'],
    standalone: true,
    imports: [FormModule, RouterLink, TranslateModule]
})
/**
 * Component for browsing items by metadata in a hierarchical controlled vocabulary
 */
export class BrowseByTaxonomyPageComponent extends BaseComponent {
}
