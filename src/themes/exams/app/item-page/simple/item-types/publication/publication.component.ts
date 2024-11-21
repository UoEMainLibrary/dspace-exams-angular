import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { Context } from '../../../../../../../app/core/shared/context.model';
import { PublicationComponent as BaseComponent } from '../../../../../../../app/item-page/simple/item-types/publication/publication.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ItemSharedModule } from '../../../../../../../app/item-page/item-shared.module';
import { DsoPageModule } from '../../../../../../../app/shared/dso-page/dso-page.module';
import { SharedModule } from '../../../../../../../app/shared/shared.module';
import { ItemPageModule } from '../../../../../../../app/item-page/item-page.module';
import { ResultsBackButtonModule } from '../../../../../../../app/shared/results-back-button/results-back-button.module';
import { NgIf, AsyncPipe } from '@angular/common';

/**
 * Component that represents a publication Item page
 */

@listableObjectComponent('Publication', ViewMode.StandalonePage, Context.Any, 'custom')
@Component({
    selector: 'ds-publication',
    // styleUrls: ['./publication.component.scss'],
    styleUrls: ['../../../../../../../app/item-page/simple/item-types/publication/publication.component.scss'],
    // templateUrl: './publication.component.html',
    templateUrl: '../../../../../../../app/item-page/simple/item-types/publication/publication.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, ResultsBackButtonModule, ItemPageModule, SharedModule, DsoPageModule, ItemSharedModule, RouterLink, AsyncPipe, TranslateModule]
})
export class PublicationComponent extends BaseComponent {

}
