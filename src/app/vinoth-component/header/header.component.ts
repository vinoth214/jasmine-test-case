import { Component, OnInit } from '@angular/core';
import { DataService } from "../../service/service";
import { AppConfig } from "../../config/config";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import {HttpModule} from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[DataService,AppConfig,HttpModule]
})
export class HeaderComponent implements OnInit {
private _dataService: DataService;
private config: AppConfig;

  constructor(_dataService: DataService,config: AppConfig) {
    this._dataService = _dataService;
    this.config = config;
    this.fetchSampleData();
   }

  ngOnInit() {
  }

  public fetchSampleData(){

  this._dataService.httpGet(this.config.URLS.sample_json).subscribe(
      data => {
        let responseJson = data.json();
        console.log("date scratch", responseJson);      
      },
      error => {       
        return false;
      }
    );
    }

}
