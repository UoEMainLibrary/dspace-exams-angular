import {
  ExternalSourceEntryImportModalComponent as BaseComponent
} from '../../../../../../../../../../app/shared/form/builder/ds-dynamic-form-ui/relation-lookup-modal/external-source-tab/external-source-entry-import-modal/external-source-entry-import-modal.component';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SearchResultsComponent } from '../../../../../../search/search-results/search-results.component';
import { SearchModule } from '../../../../../../../../../../app/shared/search/search.module';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'ds-external-source-entry-import-modal',
    styleUrls: ['../../../../../../../../../../app/shared/form/builder/ds-dynamic-form-ui/relation-lookup-modal/external-source-tab/external-source-entry-import-modal/external-source-entry-import-modal.component.scss'],
    // styleUrls: ['./external-source-entry-import-modal.component.scss'],
    templateUrl: '../../../../../../../../../../app/shared/form/builder/ds-dynamic-form-ui/relation-lookup-modal/external-source-tab/external-source-entry-import-modal/external-source-entry-import-modal.component.html',
    standalone: true,
    imports: [NgIf, SearchModule, SearchResultsComponent, AsyncPipe, TranslateModule]
})
export class ExternalSourceEntryImportModalComponent extends BaseComponent {

}
