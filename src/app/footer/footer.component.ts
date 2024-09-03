import { Component, Optional } from '@angular/core';
import { hasValue } from '../shared/empty.util';
import { KlaroService } from '../shared/cookies/klaro.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthorizationDataService } from '../core/data/feature-authorization/authorization-data.service';
import { FeatureID } from '../core/data/feature-authorization/feature-id';

import { isAuthenticated } from '../core/auth/selectors';
import { select, Store } from '@ngrx/store';
import { AppState} from '../app.reducer';


@Component({
  selector: 'ds-footer',
  styleUrls: ['footer.component.scss'],
  templateUrl: 'footer.component.html'
})
export class FooterComponent {
  dateObj: number = Date.now();

  /**
   * A boolean representing if to show or not the top footer container
   */
  showTopFooter = false;
  showPrivacyPolicy = environment.info.enablePrivacyStatement;
  showEndUserAgreement = environment.info.enableEndUserAgreement;
  showSendFeedback$: Observable<boolean>;

  /**
   * Whether user is authenticated.
   * @type {Observable<string>}
   */
  public isAuthenticated: Observable<boolean>;

  constructor(
    @Optional() private cookies: KlaroService,
    private authorizationService: AuthorizationDataService,
    public store: Store<AppState>,
  ) {
    this.showSendFeedback$ = this.authorizationService.isAuthorized(FeatureID.CanSendFeedback);
  }

  showCookieSettings() {
    if (hasValue(this.cookies)) {
      this.cookies.showSettings();
    }
    return false;
  }

  ngOnInit(): void {
    this.isAuthenticated = this.store.pipe(select(isAuthenticated));
  }
}
