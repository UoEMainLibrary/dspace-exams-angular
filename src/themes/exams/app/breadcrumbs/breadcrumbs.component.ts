import { Component } from '@angular/core';
import { BreadcrumbsComponent as BaseComponent } from '../../../../app/breadcrumbs/breadcrumbs.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { NgIf, NgTemplateOutlet, NgFor, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../app/shared/shared.module';

/**
 * Component representing the breadcrumbs of a page
 */
@Component({
    selector: 'ds-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    // templateUrl: '../../../../app/breadcrumbs/breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
    // styleUrls: ['../../../../app/breadcrumbs/breadcrumbs.component.scss']
    ,
    standalone: true,
    imports: [SharedModule, NgIf, NgTemplateOutlet, NgFor, RouterLink, NgbTooltipModule, AsyncPipe, TranslateModule]
})
export class BreadcrumbsComponent extends BaseComponent {
}
// 