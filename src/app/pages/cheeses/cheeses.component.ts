import { CheesesService } from './../../shared/cheeses.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cheese } from 'src/app/models/cheese';

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
  public cheeses;
  public cheese: Cheese;
  public curedCheeses: Cheese [];
  public semiCheeses: Cheese [];
  public softCheeses: Cheese [];

  constructor( private cheesesService: CheesesService,  private router: Router) {
    this.showAllCheeses = false;
    this.showCuredCheeses = true;
    this.showSemicuredCheeses = true;
    this.showSoftCheeses = true;
    this.selectionNav = false;
    this.badge = "notActive";
    this.active = "active";
  }
     
  getAllCheeses(){
    if(this.showAllCheeses){
      this.showAllCheeses = false;
        }else{
            this.showAllCheeses = true;
        }
    this.showCuredCheeses = true;
    this.showSemicuredCheeses = true;
    this.showSoftCheeses = true;
  }

  getCuredCheeses(){
    if(this.showCuredCheeses){
      this.showCuredCheeses = false;
        }else{
            this.showCuredCheeses = true;
        }
    this.showAllCheeses = true;
    this.showSemicuredCheeses = true;
    this.showSoftCheeses = true;
  }

  getSemicuredCheeses(){
    if(this.showSemicuredCheeses){
      this.showSemicuredCheeses = false;
        }else{
            this.showSemicuredCheeses = true;
        }
    this.showAllCheeses = true;
    this.showCuredCheeses = true;
    this.showSoftCheeses = true;
  }

  getSoftCheeses(){
    if(this.showSoftCheeses){
      this.showSoftCheeses = false;
        }else{
            this.showSoftCheeses = true;
        }
    this.showAllCheeses = true;
    this.showCuredCheeses = true;
    this.showSemicuredCheeses = true;
  }

  obtainAllCheeses(){
    this.cheesesService.getCheeses().subscribe((data)=> {
      this.cheeses = data;
      });      
  }

  getOneCheese(product_id){
    this.cheesesService.getInfoCheese(product_id).subscribe((data: Cheese)=> {
    this.cheesesService.oneCheeseInfo= data[0];
    this.router.navigate(["/", "cheese"]);
    })
  }

  obtainCuredCheeses(){
    this.cheesesService.getCuredCheeses().subscribe((data: Cheese [])=> {
      this.curedCheeses = data;
      });     
  }

  obtainSemiCheeses(){
    this.cheesesService.getSemicuredCheeses().subscribe((data: Cheese [])=> {
      this.semiCheeses = data;
      });      
  }

  obtainSoftCheeses(){
    this.cheesesService.getSoftCheeses().subscribe((data : Cheese [])=> {
      this.softCheeses = data;
      });      
  }

  ngOnInit(): void {
    this.obtainAllCheeses();
    this.obtainCuredCheeses();
    this.obtainSemiCheeses();
    this.obtainSoftCheeses();
  }

}
