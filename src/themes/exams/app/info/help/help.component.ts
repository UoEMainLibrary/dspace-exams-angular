import { Component } from '@angular/core';
import { HelpComponent as BaseComponent } from '../../../../../app/info/help/help.component';

@Component({
    selector: 'ds-help',
    styleUrls: ['./help.component.scss'],
    // styleUrls: ['../../../../../app/info/help/help.component.scss'],
    templateUrl: './help.component.html'
    // templateUrl: '../../../../../app/info/help/help.component.html'
    ,
    standalone: true
})

/**
 * Component displaying the help Statement
 */
export class HelpComponent extends BaseComponent { }
