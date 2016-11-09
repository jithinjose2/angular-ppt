import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  fruits : Array<Object> = [
    { name : 'Apple', price : 200},
    { name : 'Orange', price : 120},
    { name : 'Grape', price : 0}
  ];

  alertError : boolean = false;

}
