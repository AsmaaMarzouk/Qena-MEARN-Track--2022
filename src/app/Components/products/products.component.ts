import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // providers:[ProductService]
})
export class ProductsComponent implements OnInit,OnChanges {
  date:Date=new Date();
// Declare array from type Iproduct
// prdList: Iproduct[];
// For lab assignment
// Day3
// catList:Icategory[];
// selectedCatID:number = 0;
// Day3
prdListOfCat:Iproduct[]=[];
@Input() receivedCatID:number = 0;
orderTotalPrice:number = 0;

// EventEmitter => generic class
@Output() totalPriceChanged:EventEmitter<number>;



// Initialize array inside constructor
// Day4 => inject service
  constructor(private prdservice:ProductService,private router:Router,private productapiService:ProductApiService) { 
    // create object of event emitter
    this.totalPriceChanged=new EventEmitter<number>();
    // this.prdList=[
    // {id:1,name:"HP",price:20000,quantity:0,imgUrl:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    // catID:1},
    // {id:5,name:"Dell",price:35000,quantity:5,imgUrl:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    // catID:1},
    // {id:18,name:"Samsung",price:10000,quantity:2,imgUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    // catID:2},
    // {id:20,name:"IPhone",price:30000,quantity:1,imgUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    // catID:2},
    // {id:66,name:"LG",price:8000,quantity:0,imgUrl:"https://image.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-600w-314401364.jpg",
    // catID:3},
    // {id:30,name:"Tornado",price:17000,quantity:9,imgUrl:"https://image.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-600w-314401364.jpg",
    // catID:3}
    // ];

    // Day3
    // this.catList=[
    //   {id:1,name:"Laptops"},
    //   {id:2,name:"Mobiles"},
    //   {id:3,name:"TV"}
    // ];
  }
  ngOnChanges(): void {
    // this.getProductsOfCat();
   // Day4
    // this.prdListOfCat=this.prdservice.getProductsOfCatID(this.receivedCatID);
    // Day5
    if(this.receivedCatID==0)
    {
      this.productapiService.getAllProducts().subscribe(prdList=>{this.prdListOfCat=prdList})
    }
    else{

    this.productapiService.getProductsByCatID(this.receivedCatID).subscribe(prds => {this.prdListOfCat=prds})
  }
  }

  ngOnInit(): void {
    // this.getProductsOfCat();
   // Day4
   // this.prdListOfCat=this.prdservice.getProductsOfCatID(this.receivedCatID);

  //  Day5
  this.productapiService.getAllProducts().subscribe(prdList=>{this.prdListOfCat=prdList})


  }

  // Day4

//  private getProductsOfCat(){
//   if(this.receivedCatID==0)
//   {
//     this.prdListOfCat=Array.from(this.prdList);
//     return;
//   }

//      this.prdListOfCat= this.prdList.filter((prd)=>prd.catID==this.receivedCatID);

//   }

  updateTotalPrice(prdPrice:number,items:any){

    // covert string to number
    // this.orderTotalPrice += prdPrice* parseInt(items);
    // this.orderTotalPrice += prdPrice* Number(items);
    // this.orderTotalPrice += prdPrice* items as number;
    this.orderTotalPrice += (prdPrice* +items);
    // to fire event use emit
    this.totalPriceChanged.emit(this.orderTotalPrice);


  }

  // Day4
  openPrdDetails(prdId:number){

    this.router.navigate(['Products',prdId])

  }

  trackByFunc(index:number,item:Iproduct){
    return item.id;

  }

}
