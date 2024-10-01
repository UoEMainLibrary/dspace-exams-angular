import { filter, map, take } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

import { ItemPageComponent } from '../simple/item-page.component';
import { MetadataMap } from '../../core/shared/metadata.models';
import { ItemDataService } from '../../core/data/item-data.service';

import { RemoteData } from '../../core/data/remote-data';
import { Item } from '../../core/shared/item.model';

import { fadeInOut } from '../../shared/animations/fade';
import { hasValue } from '../../shared/empty.util';
import { AuthService } from '../../core/auth/auth.service';
import { Location } from '@angular/common';
import { AuthorizationDataService } from '../../core/data/feature-authorization/authorization-data.service';
import { ServerResponseService } from '../../core/services/server-response.service';
import { SignpostingDataService } from '../../core/data/signposting-data.service';
import { LinkHeadService } from '../../core/services/link-head.service';

/** added for the back button */
import { RouteService } from 'src/app/core/services/route.service';


/**
 * This component renders a full item page.
 * The route parameter 'id' is used to request the item it represents.
 */

@Component({
  selector: 'ds-full-item-page',
  styleUrls: ['./full-item-page.component.scss'],
  templateUrl: './full-item-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut]
})
export class FullItemPageComponent extends ItemPageComponent implements OnInit, OnDestroy {

  @Input() object: Item;

  itemRD$: BehaviorSubject<RemoteData<Item>>;

  metadata$: Observable<MetadataMap>;

  /**
   * added to display the back button
   */
  previousRoute = /^(\/search|\/browse|\/collections|\/admin\/search|\/mydspace)/;
  showBackButton: Observable<boolean>;
  
  /**
   * True when the itemRD has been originated from its workspaceite/workflowitem, false otherwise.
   */
  fromSubmissionObject = false;

  subs = [];

    constructor(
      protected route: ActivatedRoute,
      protected router: Router,
      protected items: ItemDataService,
      protected authService: AuthService,
      protected authorizationService: AuthorizationDataService,
      protected location: Location,
      protected responseService: ServerResponseService,
      protected signpostingDataService: SignpostingDataService,
      protected linkHeadService: LinkHeadService,
      protected routeService: RouteService,
      @Inject(PLATFORM_ID) protected platformId: string,
    ) {
      super(route, router, items, authService, authorizationService, responseService, signpostingDataService, linkHeadService, platformId);
    }

  back = () => {
    this.routeService.getRootSearchUrl().pipe(
          take(1)
        ).subscribe(
          (url => {
            this.router.navigateByUrl(url);
          })
        );
  };

  /*** AoT inheritance fix, will hopefully be resolved in the near future **/
  ngOnInit(): void {

    super.ngOnInit();
    this.metadata$ = this.itemRD$.pipe(
      map((rd: RemoteData<Item>) => rd.payload),
      filter((item: Item) => hasValue(item)),
      map((item: Item) => item.metadata),);

    // hide/show the back button, adapted to return to search results
    this.showBackButton = this.routeService.getRootSearchUrl().pipe(
      filter(url => this.previousRoute.test(url)),
      take(1),
      map(() => true)
    );

    this.subs.push(this.route.data.subscribe((data: Data) => {
        this.fromSubmissionObject = hasValue(data.wfi) || hasValue(data.wsi);
      })
    );
  }

  ngOnDestroy() {
    this.subs.filter((sub) => hasValue(sub)).forEach((sub) => sub.unsubscribe());
  }
}
