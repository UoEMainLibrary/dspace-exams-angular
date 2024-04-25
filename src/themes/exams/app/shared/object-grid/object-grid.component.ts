import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { fadeIn } from '../../../../../app/shared/animations/fade';
import { ObjectGridComponent as BaseComponent } from '../../../../../app/shared/object-grid/object-grid.component';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'ds-object-grid',
  // styleUrls: ['./object-grid.component.scss'],
  styleUrls: ['../../../../../app/shared/object-grid/object-grid.component.scss'],
  // templateUrl: './object-grid.component.html',
  templateUrl: '../../../../../app/shared/object-grid/object-grid.component.html',
  animations: [fadeIn]
})

export class ObjectGridComponent extends BaseComponent {
}
