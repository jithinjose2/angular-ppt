import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  slides: Array<Object>;

  constructor() {
    this.slides = [
      {name : 'Welcome', routeLink:['welcome']},
      {name : 'Basics',  routeLink:['basics']}
    ];
  }

}
