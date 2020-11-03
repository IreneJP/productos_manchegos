import { Component, OnInit } from '@angular/core';
import { Cheese } from 'src/app/models/cheese';
import { CheesesService } from './../../shared/cheeses.service';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.css']
})
export class CheeseComponent implements OnInit {
  public arrow: void;
  public cheese:Cheese;

  constructor( private cheesesService: CheesesService) { 
    this.cheese = this.cheesesService.oneCheeseInfo
  }

  goBack(){
    this.cheesesService.backClicked()
  }

  ngOnInit(): void {
  }

}
