import { DsoEditMetadataComponent as BaseComponent } from '../../../../../app/dso-shared/dso-edit-metadata/dso-edit-metadata.component';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { SharedModule } from '../../../../../app/shared/shared.module';
import { DsoSharedModule } from '../../../../../app/dso-shared/dso-shared.module';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'ds-dso-edit-metadata',
    // styleUrls: ['./dso-edit-metadata.component.scss'],
    styleUrls: ['../../../../../app/dso-shared/dso-edit-metadata/dso-edit-metadata.component.scss'],
    // templateUrl: './dso-edit-metadata.component.html',
    templateUrl: '../../../../../app/dso-shared/dso-edit-metadata/dso-edit-metadata.component.html',
    standalone: true,
    imports: [NgIf, DsoSharedModule, NgFor, SharedModule, LoadingComponent, AsyncPipe, TranslateModule]
})
export class DsoEditMetadataComponent extends BaseComponent {
}
