import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-inline',
  // templateUrl: './banner-inline.component.html',
  template: '<h1>{{title}}</h1>',
  styleUrls: ['./banner-inline.component.css']
})
export class BannerInlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


   title = 'Test Tour of Heroes';

}
