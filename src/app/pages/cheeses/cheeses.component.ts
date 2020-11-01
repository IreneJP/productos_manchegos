import { CheesesService } from './../../shared/cheeses.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheeses.component.html',
  styleUrls: ['./cheeses.component.css']
})
export class CheesesComponent implements OnInit {
  public showAllCheeses: boolean;
  public showCuredCheeses: boolean;
  public showSemicuredCheeses: boolean;
  public showSoftCheeses: boolean;
  public selectionNav: boolean;
  public badge: string;
  public active: string;
  public arrow: void;

  constructor( private cheesesService: CheesesService,  private router: Router) {
    this.showAllCheeses = false;
    this.showCuredCheeses = true;
    this.showSemicuredCheeses = true;
    this.showSoftCheeses = true;
    this.selectionNav = false;
    this.badge = "notActive";
    this.active = "active";
  }

  goBack(){
    this.cheesesService.backClicked()
  }

   
  allCheeses(){
    if(this.showAllCheeses){
      this.showAllCheeses = false;
        }else{
            this.showAllCheeses = true;
        }
    this.showCuredCheeses = true;
    this.showSemicuredCheeses = true;
    this.showSoftCheeses = true;
  }

  curedCheeses(){
    if(this.showCuredCheeses){
      this.showCuredCheeses = false;
        }else{
            this.showCuredCheeses = true;
        }
    this.showAllCheeses = true;
    this.showSemicuredCheeses = true;
    this.showSoftCheeses = true;
  }

  semicuredCheeses(){
    if(this.showSemicuredCheeses){
      this.showSemicuredCheeses = false;
        }else{
            this.showSemicuredCheeses = true;
        }
    this.showAllCheeses = true;
    this.showCuredCheeses = true;
    this.showSoftCheeses = true;
  }

  softCheeses(){
    if(this.showSoftCheeses){
      this.showSoftCheeses = false;
        }else{
            this.showSoftCheeses = true;
        }
    this.showAllCheeses = true;
    this.showCuredCheeses = true;
    this.showSemicuredCheeses = true;
  }

  /*showCheeseInfo(){
    if(this.cheeseInfo){
      this.cheeseInfo = false;
        }else{
            this.cheeseInfo = true;
        }

    this.showAllCheeses = true;
    this.showCuredCheeses = true;
    this.showSemicuredCheeses = true;
    this.showSoftCheeses = true;
    this.selectionNav = true;
  }*/

  showCheeseInfo(){
    this.router.navigate(["/", "cheese"])
  }

  ngOnInit(): void {
  }

}
