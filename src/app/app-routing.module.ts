import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
// Day4
// Basics in routing
const routes: Routes = [
  // First Test case
  // {path:'',redirectTo:'/Home',pathMatch:'full'},// Default Path
  // {path:'Home',component:HomeComponent},
  // {path:'Products',component:ProductsComponent},
  // {path:'Order',component:OrderParentComponent},
  // {path:'**',component:NotFoundPageComponent} //Wild Card path

// Second Test case
// First match wins
// {path:'main',component:MainLayoutComponent,children:[
 
  {path:'',component:MainLayoutComponent,children:[
  {path:'',redirectTo:'/Home',pathMatch:'full'},// Default Path
  {path:'Home',component:HomeComponent},
  {path:'Products',component:ProductsComponent},
  {path:'Products/:pid',component:ProductDetailsComponent},//parameter with path
  {path:'Order',component:OrderParentComponent},

]},
{path:'**',component:NotFoundPageComponent} //Wild Card path
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
