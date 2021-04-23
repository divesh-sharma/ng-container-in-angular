import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  clients = [
    {name:'A',paid:false,money:0},
    {name:'B',paid:true,money:10000},
    {name:'C',paid:false,money:0},
    {name:'D',paid:true,money:10000},

  ]
}
