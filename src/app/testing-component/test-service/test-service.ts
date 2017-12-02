import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class UserService {
     isLoggedIn:boolean;
    user:any
    public quote: string = 'Test quote';


     private http: Http;

     constructor(http: Http) {
        this.http = http;
        this.isLoggedIn=true;
         this.user= { name: 'vinoth'}
  }

 getQuote(){

  return Promise.resolve(this.quote);

}

}