import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
// subject => observer(subscribe on observable)  && observable (emit on values)
  private isloggedSubject:BehaviorSubject<boolean>;
  constructor() {
    // this.isloggedSubject=new BehaviorSubject<boolean>(intialValue);
    this.isloggedSubject=new BehaviorSubject<boolean>(this.isUserLogged);
   }
   login(userEmail:string, password:string){
    let userToken='123456';
    localStorage.setItem("token",userToken);
    this.isloggedSubject.next(true)
   }
   logout(){
    localStorage.removeItem("token");
    this.isloggedSubject.next(false)
   }

   get isUserLogged():boolean {
     return (localStorage.getItem('token'))?true:false;
   }
   getLoggedStatus():Observable<boolean> {
    return this.isloggedSubject.asObservable();
   }
}
