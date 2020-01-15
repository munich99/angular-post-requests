import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  ganzeListe;
  shipping;

  constructor(public httpService:HttpService){}

  ngOnInit() {

    this.ganzeListe = this.httpService.sendGetRequest();
    console.log(this.ganzeListe);
    
  }

 
  name = this.httpService.funktionsUberpruefung();
  



}
