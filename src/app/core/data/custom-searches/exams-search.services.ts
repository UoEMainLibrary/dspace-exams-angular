// exams-search.service.ts

import { Injectable } from '@angular/core';
import { SearchService } from '../../shared/search/search.service';
import { Observable } from 'rxjs';

import { Item } from '../../shared/item.model';
import { SearchResult } from '../../../shared/search/models/search-result.model';


import { RouteService } from '../../services/route.service';
import { RequestService } from '../../data/request.service';
import { RemoteDataBuildService } from '../../cache/builders/remote-data-build.service';
import { ObjectCacheService } from '../../cache/object-cache.service';
import { HALEndpointService } from '../../shared/hal-endpoint.service';
import { NotificationsService } from '../../../shared/notifications/notifications.service';
import { TranslateService } from '@ngx-translate/core';
import { Angulartics2 } from 'angulartics2';
import { DSpaceObjectDataService } from '../dspace-object-data.service';
import { PaginationService } from '../../pagination/pagination.service';
import { SearchConfigurationService } from '../../shared/search/search-configuration.service';
// import { SearchQuery } from 'src/app/shared/search/models/search-query.model';
import { RemoteData } from '../remote-data';
import { SearchObjects } from 'src/app/shared/search/models/search-objects.model';
import { PaginatedSearchOptions } from 'src/app/shared/search/models/paginated-search-options.model';
import { FollowLinkConfig } from 'src/app/shared/utils/follow-link-config.model';
import { DSpaceObject } from '../../shared/dspace-object.model';
import { map, switchMap, take } from 'rxjs/operators';
import { hasValue, hasValueOperator, isNotEmpty } from '../../../shared/empty.util';
import { URLCombiner } from '../../url-combiner/url-combiner';
import { GenericConstructor } from '../../shared/generic-constructor';
import { ResponseParsingService } from '../../data/parsing.service';





@Injectable({
  providedIn: 'root'
})
export class ExamsSearchService extends SearchService {

    constructor(routeService: RouteService, requestService: RequestService, rdbService: RemoteDataBuildService, halService: HALEndpointService, notificationsService: NotificationsService, translateService: TranslateService, angulartics2: Angulartics2, dsoDataService: DSpaceObjectDataService, paginationService: PaginationService, searchConfigurationService: SearchConfigurationService) {
        super(routeService, requestService, rdbService, halService, dsoDataService, paginationService, searchConfigurationService, angulartics2);
    }

    // search<T extends DSpaceObject>(searchOptions?: PaginatedSearchOptions, responseMsToLive?: number, useCachedVersionIfAvailable?: boolean, reRequestOnStale?: boolean, ...linksToFollow: FollowLinkConfig<T>[]): Observable<RemoteData<SearchObjects<T>>> {
        
    //     const searchResults = super.search(searchOptions);

    //     return searchResults.pipe(
    //                 map((results: SearchResult<Item>) => {
        
    //                     results.payload.forEach((item: Item) => {
                        
    //                         // Find original bundle
    //                         const originalBundle = item.bundles.find(bundle => {
    //                             return bundle.name === 'ORIGINAL';
    //                         });
        
    //                         if (originalBundle) {
    //                             // Get original bitstreams
    //                             const originalBitstreams = originalBundle.bitstreams;
        
    //                             // Attach bitstreams to item
    //                             item.originalBitstreams = originalBitstreams; 
    //                         }
        
    //                     });
        
    //                 )
    //             );
    // }

    
    search<T extends DSpaceObject>(searchOptions?: PaginatedSearchOptions, responseMsToLive?: number, useCachedVersionIfAvailable?: boolean, reRequestOnStale?: boolean, ...linksToFollow: FollowLinkConfig<T>[]): Observable<RemoteData<SearchObjects<T>>> {
        const searchResults = super.search<T>(searchOptions, responseMsToLive, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);

        const href$ = this.getEndpoint(searchOptions);

        href$.pipe(
            take(1),
            map((href: string) => {
              const args = this.searchDataService.addEmbedParams(href, [], ...linksToFollow);
              if (isNotEmpty(args)) {
                return new URLCombiner(href, `?${args.join('&')}`).toString();
              } else {
                return href;
              }
            })
          ).subscribe((url: string) => {
            const request = new this.request(this.requestService.generateRequestId(), url);
      
            const getResponseParserFn: () => GenericConstructor<ResponseParsingService> = () => {
              return this.parser;
            };
      
            Object.assign(request, {
              responseMsToLive: hasValue(responseMsToLive) ? responseMsToLive : request.responseMsToLive,
              getResponseParser: getResponseParserFn,
              searchOptions: searchOptions
            });
      
            this.requestService.send(request, useCachedVersionIfAvailable);
          });
      
          const sqr$ = href$.pipe(
            switchMap((href: string) => this.rdb.buildFromHref<SearchObjects<T>>(href))
          );
      
          return this.directlyAttachIndexableObjects(sqr$, useCachedVersionIfAvailable, reRequestOnStale, ...linksToFollow);
        
        // return searchResults.pipe(
        //     map((results: RemoteData<SearchObjects<T>>) => {
                
        //             results.payload.
        //             results.payload.objects.forEach((item: T) => {
        //                 if (item instanceof Item) {
        //                     // Find original bundle
        //                     const originalBundle = item.bundles.find(bundle => bundle.name === 'ORIGINAL');

        //                     if (originalBundle) {
        //                         // Get original bitstreams
        //                         const originalBitstreams = originalBundle.bitstreams;

        //                         // Attach bitstreams to item
        //                         item.originalBitstreams = originalBitstreams;
        //                     }
        //                 }
        //             });
        //             return results;
        //     })
        // );
    }

}