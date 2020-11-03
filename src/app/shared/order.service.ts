import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private myOrder: Order;

  constructor() {
   // this.myOrder = new Order({})
   }

   
}
