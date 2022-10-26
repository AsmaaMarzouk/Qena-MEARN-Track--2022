import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { StoreClass } from 'src/app/Models/store-class';
import { StoreInfo } from 'src/app/Models/store-info';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template:'<h1>Hello World</h1>',
  styleUrls: ['./home.component.scss'],
  // styles:['h1{color:green}']
})
export class HomeComponent implements OnInit,OnDestroy {
// Interface
store:StoreInfo={name:"ITI Store",coverImgURL:"https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg",branches:["Qena","Sohag","Smart","Alex"]}


// class
// class property
storeDataClass:StoreClass;

// Day2
showImg:boolean = true;
userFeedback:string = "VeryGood";

// Day5
// private subscription!:Subscription;

private subscription:Subscription[]=[];
  constructor(private promoAds:PromotionAdsService) {
    this.storeDataClass=new StoreClass("ITI From Class","https://st.depositphotos.com/1522993/2984/i/600/depositphotos_29843999-stock-photo-pink-abstract-flower-with-sparkles.jpg",["Item1","Item2","Item3"]);
   }
 

   toggleImg(){

    this.showImg=!this.showImg;
   }






  ngOnInit(): void {
    // observer => return object
    // three callback function => next , error,complete
    // let observer={
    //   next:(data:string) => {
    //     console.log(data);
        
    //   },
    //   error:(err:string) => {
    //     console.log(err);
        
    //   },
    //   complete:()=>{
    //     console.log("Ads Finished");
        
    //   }
    // }
    // this.promoAds.getScheduleAds(2).subscribe(observer);

    // Second test case 
    // let ads:Subscription=this.promoAds.getScheduleAds(3).subscribe({
      // this.subscription =this.promoAds.getScheduleAds(3).subscribe({
    //    let adsObservable =this.promoAds.getScheduleAds(3).subscribe({
    //      next:(data:string) => {
    //     console.log(data);
        
    //   },
    //   error:(err:string) => {
    //     console.log(err);
        
    //   },
    //   complete:()=>{
    //     console.log("Ads Finished");
        
    //   }

    // })
    // this.subscription.push(adsObservable);


    // // For test operators
    //   let observer={
    //   next:(data:string) => {
    //     console.log(data);
        
    //   },
    //   error:(err:string) => {
    //     console.log(err);
        
    //   },
    //   complete:()=>{
    //     console.log("Ads Finished");
        
    //   }
    // }
    // let filteredDataOfOberverable=this.promoAds.getScheduleAds(2).pipe(filter(ads=>ads.includes("Black Friday")),
    // map(ad=> "Ad:"+ad)
    // );
    // let ads=filteredDataOfOberverable.subscribe(observer);
    // this.subscription.push(ads);


    let sub=this.promoAds.getAds().subscribe(ad=>{
      console.log(ad);
      
    })
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();

    for(let sub of this.subscription){

      sub.unsubscribe();
    }
  }

}
