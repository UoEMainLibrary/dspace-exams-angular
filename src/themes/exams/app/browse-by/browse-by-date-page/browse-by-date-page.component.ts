import { Component } from '@angular/core';
import { BrowseByDatePageComponent as BaseComponent } from '../../../../../app/browse-by/browse-by-date-page/browse-by-date-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedBrowseByModule } from '../../../../../app/shared/browse-by/shared-browse-by.module';
import { DsoPageModule } from '../../../../../app/shared/dso-page/dso-page.module';
import { ComcolModule } from '../../../../../app/shared/comcol/comcol.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-browse-by-date-page',
    // styleUrls: ['./browse-by-date-page.component.scss'],
    styleUrls: ['../../../../../app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component.scss'],
    // templateUrl: './browse-by-date-page.component.html'
    templateUrl: '../../../../../app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, ComcolModule, DsoPageModule, SharedBrowseByModule, AsyncPipe, TranslateModule]
})

/**
 * Component for determining what Browse-By component to use depending on the metadata (browse ID) provided
 */

export class BrowseByDatePageComponent extends BaseComponent {
}
