import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MEARN Track';
  
  sayHello(){
    return "Hello , "+this.title;
  }



}
