import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-example';
  
  constructor(private router:Router){}

example1(){
  this.router.navigate(['example1']);
}

example2(){
  this.router.navigate(['example2']);
}
}
