import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
// Day5
export class ProductApiService {

  constructor(private httpclient:HttpClient) { }

  getAllProducts():Observable<Iproduct[]>{
    // return this.httpclient.get<Iproduct[]>(apiURL)
    return this.httpclient.get<Iproduct[]>(`${environment.APIBaseURL}/products`);
  }

  getProductsByCatID(catid:number):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.APIBaseURL}/products?catID=${catid}`)
  }

  getProductByID(prdID:number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`${environment.APIBaseURL}/products/${prdID}`)
  }
}
