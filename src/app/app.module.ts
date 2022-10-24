import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './Components/products/products.component';
import { BorderBoxDirective } from './Directives/border-box.directive';
import { UsdToEgpPipe } from './Pipes/usd-to-egp.pipe';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    ProductsComponent,
    BorderBoxDirective,
    UsdToEgpPipe,
    OrderParentComponent,
    NotFoundPageComponent,
    MainLayoutComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
