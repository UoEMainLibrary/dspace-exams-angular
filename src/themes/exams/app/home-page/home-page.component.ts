import { Component } from '@angular/core';
import { HomePageComponent as BaseComponent } from '../../../../app/home-page/home-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../app/shared/shared.module';
import { StatisticsModule } from '../../../../app/statistics/statistics.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { HomePageModule } from '../../../../app/home-page/home-page.module';

@Component({
    selector: 'ds-home-page',
    styleUrls: ['./home-page.component.scss'],
    // styleUrls: ['../../../../app/home-page/home-page.component.scss'],
    templateUrl: './home-page.component.html'
    // templateUrl: '../../../../app/home-page/home-page.component.html'
    ,
    standalone: true,
    imports: [HomePageModule, NgIf, StatisticsModule, SharedModule, AsyncPipe, TranslateModule]
})
export class HomePageComponent extends BaseComponent {

}
