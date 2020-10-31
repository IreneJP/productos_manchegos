import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public infoUser: boolean;
  public shippingInfo: boolean;
  public badge: string;
  public active: string;

  constructor() { 
  this.infoUser = false;
  this.shippingInfo = true;
  this.badge = "notActive";
  this.active = "active";
  }

  showUserInfo(){
    if(this.infoUser){
      this.infoUser = false;
        }else{
            this.infoUser = true;
        }
        if(this.shippingInfo){
          this.shippingInfo = false;
          this.active = (this.infoUser) ? "notActive" : "active";
            }else{
                this.shippingInfo = true;
                this.active = (this.shippingInfo) ? "notActive" : "active";
            }  
  }



  ngOnInit(): void {
  }

}
