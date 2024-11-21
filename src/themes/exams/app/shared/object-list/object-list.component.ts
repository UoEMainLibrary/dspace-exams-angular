import { Component } from '@angular/core';
import { ObjectListComponent as BaseComponent} from '../../../../../app/shared/object-list/object-list.component';
import { NgIf, NgClass, NgFor } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

/**
 * A component to display the "Browse By" section of a Community or Collection page
 * It expects the ID of the Community or Collection as input to be passed on as a scope
 */
@Component({
    selector: 'ds-object-list',
    // styleUrls: ['./object-list.component.scss'],
    styleUrls: ['../../../../../app/shared/object-list/object-list.component.scss'],
    // templateUrl: 'object-list.component.html'
    templateUrl: '../../../../../app/shared/object-list/object-list.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, NgClass, NgFor]
})

export class ObjectListComponent extends BaseComponent {}
