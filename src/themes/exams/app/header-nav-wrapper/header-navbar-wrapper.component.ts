import { Component } from '@angular/core';
import { HeaderNavbarWrapperComponent as BaseComponent } from '../../../../app/header-nav-wrapper/header-navbar-wrapper.component';
import { NavbarModule } from '../../../../app/navbar/navbar.module';
import { RootModule } from '../../../../app/root.module';
import { NgClass, AsyncPipe } from '@angular/common';

/**
 * This component represents a wrapper for the horizontal navbar and the header
 */
@Component({
    selector: 'ds-header-navbar-wrapper',
    // styleUrls: ['header-navbar-wrapper.component.scss'],
    styleUrls: ['../../../../app/header-nav-wrapper/header-navbar-wrapper.component.scss'],
    // templateUrl: 'header-navbar-wrapper.component.html',
    templateUrl: '../../../../app/header-nav-wrapper/header-navbar-wrapper.component.html',
    standalone: true,
    imports: [NgClass, RootModule, NavbarModule, AsyncPipe]
})
export class HeaderNavbarWrapperComponent extends BaseComponent {
}
