import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class DataService {

 private http: Http;

 private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*'); /*cross origin is handled in API side*/
    return headers;
  }

constructor(http: Http) {
    this.http = http;
  }


public httpPost(_data, _apiUrl) {
    let options = new RequestOptions(this.getHeaders);
    let body = JSON.parse(_data);
    return this.http.post(_apiUrl, body, options).map((res: Response) => res).catch(this.handleError);
  }

  public httpGet(_apiUrl) {
    let options = new RequestOptions(this.getHeaders);
    return this.http.get(_apiUrl, options).map((res: Response) => res);
  }
  
   public httpPut(_data, _apiUrl) {
    let options = new RequestOptions(this.getHeaders());
    let body = JSON.parse(_data);
    return this.http.put(_apiUrl, body, options).map((res: Response) => res);

  }


  public handleError(error: Response) {
      return Observable.throw( "Error while processing request. Please try again after some time" || error.json().errorMessage); 

  }




}