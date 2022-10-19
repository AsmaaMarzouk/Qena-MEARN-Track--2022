import { Component, OnInit } from '@angular/core';
import { StoreClass } from 'src/app/Models/store-class';
import { StoreInfo } from 'src/app/Models/store-info';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
// Interface
store:StoreInfo={name:"ITI Store",coverImgURL:"https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg",branches:["Qena","Sohag","Smart","Alex"]}


// class
// class property
storeDataClass:StoreClass;

// Day2
showImg:boolean = true;
userFeedback:string = "VeryGood";


  constructor() {
    this.storeDataClass=new StoreClass("ITI From Class","https://st.depositphotos.com/1522993/2984/i/600/depositphotos_29843999-stock-photo-pink-abstract-flower-with-sparkles.jpg",["Item1","Item2","Item3"]);
   }

   toggleImg(){

    this.showImg=!this.showImg;
   }






  ngOnInit(): void {
  }

}
