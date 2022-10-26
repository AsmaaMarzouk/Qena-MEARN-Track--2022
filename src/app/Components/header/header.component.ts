import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
userLog:boolean;
  constructor(private authService:UserAuthService) {
    this.userLog=this.authService.isUserLogged;
    // console.log(this.userLog);
    
   }

  ngOnInit(): void {
    // this.userLog=this.authService.isUserLogged;
    this.authService.getLoggedStatus().subscribe(status => {
      this.userLog=status;
      console.log(this.userLog);
      
    })
  }

}
