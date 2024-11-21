import { Component, OnInit } from '@angular/core';
import { AboutComponent as BaseComponent } from '../../../../../app/info/about/about.component';

@Component({
    selector: 'ds-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: true
})

export class AboutComponent extends BaseComponent {}
