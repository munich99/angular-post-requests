import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class HttpService {

  apiUrl='api/docs.json';

  constructor(public httpClient:HttpClient) { }

  sendGetRequest(){

    let xx = this.httpClient.get(this.apiUrl);
    console.log(xx, "ee")
    return xx;
  }

  funktionsUberpruefung(){
    
    return "Hallo vom Service";
  }

  getShippingPrices(){
    return this.httpClient.get('/assets/shipping.json');
  }

}