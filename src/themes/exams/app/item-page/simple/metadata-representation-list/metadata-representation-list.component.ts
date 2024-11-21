import { MetadataRepresentationListComponent as BaseComponent } from '../../../../../../app/item-page/simple/metadata-representation-list/metadata-representation-list.component';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from '../../../../../../app/shared/shared.module';

@Component({
    selector: 'ds-metadata-representation-list',
    // templateUrl: './metadata-representation-list.component.html'
    templateUrl: '../../../../../../app/item-page/simple/metadata-representation-list/metadata-representation-list.component.html',
    standalone: true,
    imports: [SharedModule, NgFor, NgIf, AsyncPipe, TranslateModule]
})
export class MetadataRepresentationListComponent extends BaseComponent {

}
