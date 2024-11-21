import { Component } from '@angular/core';
import { FooterComponent as BaseComponent } from '../../../../app/footer/footer.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'ds-footer',
    styleUrls: ['footer.component.scss'],
    // styleUrls: ['../../../../app/footer/footer.component.scss'],
    templateUrl: 'footer.component.html'
    // templateUrl: '../../../../app/footer/footer.component.html'
    ,
    standalone: true,
    imports: [RouterLink, NgIf, AsyncPipe]
})
export class FooterComponent extends BaseComponent {
}
