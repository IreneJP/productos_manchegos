import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public infoUser: boolean;
  public shippingInfo: boolean;

  constructor() { 
  this.infoUser = true;
  this.shippingInfo = true;
  }

  showUserInfo(){
    if(this.infoUser){
      this.infoUser = false;
        }else{
            this.infoUser = true;
        }
  }

  showShippingInfo(){
    if(this.shippingInfo){
      this.shippingInfo = false;
        }else{
            this.shippingInfo = true;
        }
  }

  ngOnInit(): void {
  }

}
