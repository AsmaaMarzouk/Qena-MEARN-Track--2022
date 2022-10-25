import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  catList:Icategory[];
  newPrd:Iproduct = {} as Iproduct;
  constructor(private prdApiService:ProductApiService,private router:Router) { 
    this.catList=[
      {id:1,name:"Laptops"},
      {id:2,name:"Mobiles"},
      {id:3,name:"TV"}
    ];
  }

  ngOnInit(): void {
  }
  AddNewPrd(){
    // let testProduct:Iproduct={
    //   id:150,
    //   name:'TV test api',
    //   price:12365,
    //   quantity:1111,
    //   imgUrl:'https://image.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-600w-314401364.jpg',
    //   catID:3
    // }

    // this.prdApiService.addNewProduct(testProduct).subscribe({
    //   next:(prd)=>{
    //     this.router.navigate(['/Products'])
    //   },
    //   error:(err)=>{
    //     console.log(err);
        
    //   }
    // })

    this.prdApiService.addNewProduct(this.newPrd).subscribe({
      next:(prd)=>{
        this.router.navigate(['/Products']);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
