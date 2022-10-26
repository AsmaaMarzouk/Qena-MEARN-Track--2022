import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { AuthGuard } from './Guards/auth.guard';
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
  {path:'Products',component:ProductsComponent,canActivate:[AuthGuard]},
  {path:'Products/:pid',component:ProductDetailsComponent},//parameter with path
  {path:'Order',component:OrderParentComponent,canActivate:[AuthGuard]},
  {path:'NewProduct',component:AddProductComponent},
  {path:'editProduct/:pid',component:AddProductComponent},
  {
    path: 'User', 
    loadChildren: () => import('src/app/Components/user-module/user-module.module').then(m => m.UserModuleModule)
  },

]},
{path:'Login',component:UserLoginComponent},
{path:'Logout',component:UserLoginComponent},

{path:'Register',component:UserRegisterComponent},
{path:'**',component:NotFoundPageComponent} //Wild Card path
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
