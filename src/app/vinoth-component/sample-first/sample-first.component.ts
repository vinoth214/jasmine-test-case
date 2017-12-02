import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-first',
  templateUrl: './sample-first.component.html',
  styleUrls: ['./sample-first.component.css']
})
export class SampleFirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.testFunc();
  }

flag:boolean=false;


public  testFunc(){
this.flag=true;
}
}
