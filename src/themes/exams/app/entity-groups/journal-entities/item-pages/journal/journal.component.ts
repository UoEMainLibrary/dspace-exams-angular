import { Component } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import {
  listableObjectComponent
} from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import {
  JournalComponent as BaseComponent
} from '../../../../../../../app/entity-groups/journal-entities/item-pages/journal/journal.component';
import { Context } from '../../../../../../../app/core/shared/context.model';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ItemSharedModule } from '../../../../../../../app/item-page/item-shared.module';
import { DsoPageModule } from '../../../../../../../app/shared/dso-page/dso-page.module';
import { SharedModule } from '../../../../../../../app/shared/shared.module';
import { ResultsBackButtonModule } from '../../../../../../../app/shared/results-back-button/results-back-button.module';
import { NgIf, AsyncPipe } from '@angular/common';

@listableObjectComponent('Journal', ViewMode.StandalonePage, Context.Any, 'custom')
@Component({
    selector: 'ds-journal',
    // styleUrls: ['./journal.component.scss'],
    styleUrls: ['../../../../../../../app/entity-groups/journal-entities/item-pages/journal/journal.component.scss'],
    // templateUrl: './journal.component.html',
    templateUrl: '../../../../../../../app/entity-groups/journal-entities/item-pages/journal/journal.component.html',
    standalone: true,
    imports: [NgIf, ResultsBackButtonModule, SharedModule, DsoPageModule, ItemSharedModule, RouterLink, AsyncPipe, TranslateModule]
})
/**
 * The component for displaying metadata and relations of an item of the type Journal
 */
export class JournalComponent extends BaseComponent {
}
