import { Injectable } from '@angular/core';
import { BitstreamDataService } from '../core/data/bitstream-data.service';
import { getBitstreamModuleRoute } from '../app-routing-paths';
import { URLCombiner } from '../core/url-combiner/url-combiner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamPaperDownloadLinkService {

  constructor(
    protected bitstreamDataService: BitstreamDataService,
  ) { }

  getBitstreamDownloadRoute(bitstream): Observable<string> {
    try 
    {
      console.log(bitstream);
      const url = bitstream !== null && bitstream !== undefined ? new URLCombiner(getBitstreamModuleRoute(), bitstream.uuid, 'download').toString() :  '/info/unavailable';
      return new Observable(subscriber => {
        subscriber.next(url);
        subscriber.complete();
      });
    }
    catch
    {

    }
  }

  

  // try{
  //   this.bitstreamDataService.findAllByItemAndBundleName(this.dso, 'ORIGINAL', { currentPage: 1, elementsPerPage: 1 })
  //     .subscribe((bi) => {
  //       this.examPaperLink$ = getBitstreamDownloadRoute(bi.payload.page[0]);
  //     });
  //   } catch (error) {
  //     // do nothing if no bitstreams are found
  //   }
  
}
