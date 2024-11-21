import { Component } from '@angular/core';
import { BrowseByTitlePageComponent as BaseComponent } from '../../../../../app/browse-by/browse-by-title-page/browse-by-title-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedBrowseByModule } from '../../../../../app/shared/browse-by/shared-browse-by.module';
import { DsoPageModule } from '../../../../../app/shared/dso-page/dso-page.module';
import { ComcolModule } from '../../../../../app/shared/comcol/comcol.module';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-browse-by-title-page',
    // styleUrls: ['./browse-by-title-page.component.scss'],
    styleUrls: ['../../../../../app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component.scss'],
    // templateUrl: './browse-by-title-page.component.html'
    templateUrl: '../../../../../app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component.html',
    standalone: true,
    imports: [SharedModule, NgIf, ComcolModule, DsoPageModule, SharedBrowseByModule, AsyncPipe, TranslateModule]
})

/**
 * Component for determining what Browse-By component to use depending on the metadata (browse ID) provided
 */

export class BrowseByTitlePageComponent extends BaseComponent {
}
