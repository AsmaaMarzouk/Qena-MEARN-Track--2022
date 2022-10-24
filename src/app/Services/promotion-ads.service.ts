import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  // Day5
  // Declare array with type string
  private adsList:string[];
  constructor() { 
    this.adsList=["Black Friday Offers",
                  "70% Sales",
                   "White Friday Offers",
                  //  "",
                   "Special offers of Black Friday"]
  }
  getScheduleAds(intervalSeconds:number):Observable<string>{

    // create object from observable
    // three case of observable => next() = success , error() = error ,complete() = complete of length
    // let adsObservable=new Observable<string>((observer)=>{
    //   observer.next();
    //   observer.error();
    //   observer.complete();
    // });
    // return adsObservable;

    return new Observable<string>((observer)=>{
      let counter=0;
     let adsTimer=setInterval(()=>{

      // Complete
      if(counter==this.adsList.length)
      {
        observer.complete();
      }
      // error
      if(this.adsList[counter]==""){
      observer.error("Error: Empty Ad");
      }
      // success
      observer.next(this.adsList[counter]);
      counter++;

      // console.log("Hello from service");
      
     },intervalSeconds*1000);

     return {
      // 1-error
      // 2-complete
      // 3-unsubscribe
      unsubscribe(){
        clearInterval(adsTimer);
        console.log("In observable unsubscribe");
        
      }
     }

    })
  }

  getAds():Observable<string>
  {
    // return from(this.adsList);
    return of("Ad1","Ad2","Ad3");
  }
}
