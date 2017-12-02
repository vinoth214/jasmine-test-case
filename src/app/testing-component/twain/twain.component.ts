import { Component, OnInit } from '@angular/core';
import { TwainService }  from '../test-service/twain-service';
@Component({
  selector: 'app-twain',
  templateUrl: './twain.component.html',
  styleUrls: ['./twain.component.css']
})
export class TwainComponent implements OnInit {

  quote: string;

  constructor(private twainService: TwainService){};

   ngOnInit() {     
  }


getQuote() {
    this.twainService.getQuote().then((quote) => {
      this.quote = quote;
    });
  };
}
