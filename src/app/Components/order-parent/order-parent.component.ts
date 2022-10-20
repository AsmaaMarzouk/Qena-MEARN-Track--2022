import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.scss']
})
export class OrderParentComponent implements OnInit,AfterViewInit {
  catList:Icategory[];
  selectedCatID:number = 0;
  receivedOrderTotalPrice:number = 0;
  
  // ViewChild
// @ViewChild('userName') user:ElementRef|null=null;
// @ViewChild('userName') user:ElementRef|undefined=undefined;
// @ViewChild('userName') user:ElementRef={} as ElementRef;
// @ViewChild('userName') user?:ElementRef; //safe negativation operator
// ! => non Null assertion operator
@ViewChild('userName') user!:ElementRef;
@ViewChild(ProductsComponent) prductCom!:ProductsComponent;
  constructor() {
    this.catList=[
      {id:1,name:"Laptops"},
      {id:2,name:"Mobiles"},
      {id:3,name:"TV"}
    ];
   }
 

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // if(this.user)
    this.user.nativeElement.value="Value From ts";
    // console.log(this.prductCom.prdListOfCat);
    
  }
  totalPriceFunc(totalPrice:number){

    this.receivedOrderTotalPrice=totalPrice;

  }

  getArray(){
    console.log(this.prductCom.prdListOfCat);
    
  }
}
