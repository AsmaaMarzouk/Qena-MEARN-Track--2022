import {Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  prd:Iproduct|undefined=undefined;
  currPrdID:number=0;
  prdIDList:number[]=[];
  cuurentIndex:number=0;
  constructor(private activedroute:ActivatedRoute,
              private router:Router,
              private prdservice:ProductService,
              private location:Location) { }

  ngOnInit(): void {
    // let sendPrdID=this.activedroute.snapshot.paramMap.get('pid');
    // console.log(sendPrdID);

    // let sendPrdID:number=(this.activedroute.snapshot.paramMap.get('pid'))?Number(this.activedroute.snapshot.paramMap.get('pid')):0;
    // let foundPrd=this.prdservice.getProductByID(sendPrdID);
    // if(foundPrd)
    // {
    //   this.prd=foundPrd;
    //   // console.log(this.prd);
    // }
    // else{
    //   alert("Product not found");
    //   this.location.back();

    // }

this.prdIDList= this.prdservice.getPrdIDsList();
// console.log(this.prdIDList);


    // this.currPrdID=(this.activedroute.snapshot.paramMap.get('pid'))?Number(this.activedroute.snapshot.paramMap.get('pid')):0;
    // let foundPrd=this.prdservice.getProductByID(this.currPrdID);
    // if(foundPrd)
    // {
    //   this.prd=foundPrd;
    //   // console.log(this.prd);
      
    // }
    // else{
    //   alert("Product not found");
    //   this.location.back();

    // }


    // subscribe

    this.activedroute.paramMap.subscribe(paramMap => {
      this.currPrdID = (paramMap.get('pid'))?Number(paramMap.get('pid')):0;
      let foundPrd=this.prdservice.getProductByID(this.currPrdID);
      if(foundPrd)
      {
        this.prd=foundPrd;
      // console.log(this.prd);
      
      }
      else{
        alert("Product not found");
        this.location.back();
    }
    })


    
  }

  goBack(){
    this.location.back();
  }

  goPrev(){
   this.cuurentIndex= this.prdIDList.findIndex((item)=>item==this.currPrdID);
  //  console.log(this.cuurentIndex);
   this.router.navigate(['Products',this.prdIDList[--this.cuurentIndex]])

  }
  goNext(){
    this.cuurentIndex= this.prdIDList.findIndex((item)=>item==this.currPrdID);
    //  console.log(this.cuurentIndex);
     this.router.navigate(['Products',this.prdIDList[++this.cuurentIndex]])
  }
  searchFunc(prdName:string){

   let result= this.prdservice.searchProductByName(prdName);
   if(result)
   {
    this.prd=result;
   }
   else
   {
    alert("Product not found");
   }
}
}
