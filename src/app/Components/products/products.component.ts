import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  date:Date=new Date();
// Declare array from type Iproduct
prdList: Iproduct[];
// For lab assignment
catList:Icategory[];
selectedCatID:number = 0;

// Initialize array inside constructor
  constructor() { 
    this.prdList=[
      {id:1,name:"HP",price:20000,quantity:0,imgUrl:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    catID:1},
    {id:5,name:"Dell",price:35000,quantity:5,imgUrl:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    catID:1},
    {id:18,name:"Samsung",price:10000,quantity:2,imgUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    catID:2},
    {id:20,name:"IPhone",price:30000,quantity:1,imgUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    catID:2},
    {id:66,name:"LG",price:8000,quantity:0,imgUrl:"https://image.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-600w-314401364.jpg",
    catID:3},
    {id:30,name:"Tornado",price:17000,quantity:9,imgUrl:"https://image.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-600w-314401364.jpg",
    catID:3}
    ];

    this.catList=[
      {id:1,name:"Laptops"},
      {id:2,name:"Mobiles"},
      {id:3,name:"TV"}
    ];
  }

  ngOnInit(): void {
  }

}
