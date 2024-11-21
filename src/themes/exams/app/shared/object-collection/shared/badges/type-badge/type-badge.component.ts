import { Component } from '@angular/core';
import { TypeBadgeComponent as BaseComponent } from 'src/app/shared/object-collection/shared/badges/type-badge/type-badge.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'ds-type-badge',
    // styleUrls: ['./type-badge.component.scss'],
    // templateUrl: './type-badge.component.html',
    templateUrl: '../../../../../../../../app/shared/object-collection/shared/badges/type-badge/type-badge.component.html',
    standalone: true,
    imports: [NgIf, TranslateModule]
})
export class TypeBadgeComponent extends BaseComponent {
}
