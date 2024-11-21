import { Component } from '@angular/core';
import { UnavailableComponent as BaseComponent } from '../../../../../app/info/unavailable/unavailable.component';

@Component({
    selector: 'ds-unavailable',
    styleUrls: ['./unavailable.component.scss'],
    // styleUrls: ['../../../../../app/info/unavailable/unavailable.component.scss'],
    templateUrl: './unavailable.component.html'
    // templateUrl: '../../../../../app/info/unavailable/unavailable.component.html'
    ,
    standalone: true
})

/**
 * Component displaying the unavailable Statement
 */
export class UnavailableComponent extends BaseComponent { }
