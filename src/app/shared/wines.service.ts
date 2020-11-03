import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WinesService {
 
  private url = "http://localhost:3000/wines";
  public oneWineInfo;
  
  constructor(private location: Location, private http :HttpClient) { }

  backClicked() {
    this.location.back();
  }

  getWines(){
    return this.http.get(this.url);   
  }

  getInfoWine(product_id:number){    
    this.oneWineInfo = this.http.get(this.url+ "/" + product_id);
    return this.oneWineInfo;
  }

  getRedWines(){
    return this.http.get(this.url + "/red");  
  }

  getRoseWines(){
    return this.http.get(this.url + "/rose");    
  }

  getWhiteWines(){
    return this.http.get(this.url + "/white");    
  }

}
