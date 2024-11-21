import { Component } from '@angular/core';
import { WorkspaceItemsDeletePageComponent as BaseComponent } from '../../../../../app/workspaceitems-edit-page/workspaceitems-delete-page/workspaceitems-delete-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../../app/shared/shared.module';
import { NgIf, AsyncPipe } from '@angular/common';


@Component({
    selector: 'ds-workspaceitems-delete-page',
    templateUrl: '../../../../../app/workspaceitems-edit-page/workspaceitems-delete-page/workspaceitems-delete-page.component.html',
    standalone: true,
    imports: [NgIf, SharedModule, AsyncPipe, TranslateModule]
})
export class WorkspaceItemsDeletePageComponent extends BaseComponent {
}
