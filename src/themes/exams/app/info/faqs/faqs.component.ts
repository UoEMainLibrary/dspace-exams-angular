import { Component } from '@angular/core';
import { FaqsComponent as BaseComponent } from '../../../../../app/info/faqs/faqs.component';

@Component({
    selector: 'ds-faqs',
    styleUrls: ['./faqs.component.scss'],
    // styleUrls: ['../../../../../app/info/faqs/faqs.component.scss'],
    templateUrl: './faqs.component.html'
    // templateUrl: '../../../../../app/info/faqs/faqs.component.html'
    ,
    standalone: true
})

/**
 * Component displaying the faqs Statement
 */
export class FaqsComponent extends BaseComponent { }
