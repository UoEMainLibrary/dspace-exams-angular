import { Component } from '@angular/core';
import { BadgesComponent as BaseComponent } from 'src/app/shared/object-collection/shared/badges/badges.component';
import { NgIf } from '@angular/common';
import { SharedModule } from '../../../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-badges',
    // styleUrls: ['./badges.component.scss'],
    styleUrls: ['../../../../../../../app/shared/object-collection/shared/badges/badges.component.scss'],
    // templateUrl: './badges.component.html',
    templateUrl: '../../../../../../../app/shared/object-collection/shared/badges/badges.component.html',
    standalone: true,
    imports: [SharedModule, NgIf]
})
export class BadgesComponent extends BaseComponent {
}
