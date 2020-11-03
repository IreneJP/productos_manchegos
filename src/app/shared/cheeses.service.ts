import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
import { HttpClient, HttpHeaders } from"@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CheesesService {  
  private url = "http://localhost:3000/cheeses";
  public oneCheeseInfo;
  
  constructor(private location: Location, private http :HttpClient) { }

  backClicked() {
    this.location.back();
  }

  getCheeses(){
    return this.http.get(this.url);   
  }

  getInfoCheese(product_id:number){    
    this.oneCheeseInfo = this.http.get(this.url+ "/" + product_id);
    return this.oneCheeseInfo;
  }

  getCuredCheeses(){
    return this.http.get(this.url + "/cured");  
  }

  getSemicuredCheeses(){
    return this.http.get(this.url + "/semicured");    
  }

  getSoftCheeses(){
    return this.http.get(this.url + "/softed");    
  }

}
