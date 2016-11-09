import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  template: `
    <br>
    App Route
    <img src="/assets/images/base_route.jpg" width="100%"/>
    <br><br>
    Child Route
    <img src="/assets/images/child_route.png" width="100%"/>
  `,
  styles: []
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
