import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:3000/user";

  constructor( private http :HttpClient ) { }

  createNewUSer(user:User){
    return this.http.post(this.url, user)
  }  

  
}
