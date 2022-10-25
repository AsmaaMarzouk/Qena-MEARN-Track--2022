import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
// Day5
export class ProductApiService {
// Day6
private httpOptions={};

  constructor(private httpclient:HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
   }

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

  // Day6
  addNewProduct(prd:Iproduct):Observable<Iproduct>{
    return this.httpclient.post<Iproduct>(`${environment.APIBaseURL}/products`,    
                                           JSON.stringify(prd),
                                           this.httpOptions);
                                          //  Advanced point
                                          //  .pipe(
                                          //   retry(3),
                                          //   catchError((err)=>{
                                          //     return throwError(()=>{
                                          //       return new Error('Error occured ,please try again')
                                          //     })
                                          //   })
                                          //  )


  }
}
