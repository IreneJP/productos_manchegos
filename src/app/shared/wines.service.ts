import { Injectable } from '@angular/core';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WinesService {

  constructor(private location: Location) { }

  backClicked() {
    this.location.back();
  }
  
}
