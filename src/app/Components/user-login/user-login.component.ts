import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  userLog:boolean = false;
  constructor(private authService:UserAuthService) { }

  ngOnInit(): void {
    this.userLog=this.authService.isUserLogged;
    // console.log(this.userLog);
    
  }
login(){
this.authService.login("UserEmail","Password");
this.userLog=this.authService.isUserLogged;
}
logout(){
this.authService.logout();
this.userLog=this.authService.isUserLogged;
}
}
