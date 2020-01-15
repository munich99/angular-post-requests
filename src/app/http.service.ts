import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class HttpService {

  apiUrl='/api/docs.json';

  constructor(public httpClient:HttpClient) { }

  sendGetRequest(){
    return this.httpClient.get(this.apiUrl);  
    
  }

  funktionsUberpruefung(){
    
    return "Hallo vom Service";
  }



}