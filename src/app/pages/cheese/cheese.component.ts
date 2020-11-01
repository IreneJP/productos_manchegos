import { Component, OnInit } from '@angular/core';
import { CheesesService } from './../../shared/cheeses.service';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.css']
})
export class CheeseComponent implements OnInit {
  public arrow: void;

  constructor( private cheesesService: CheesesService) { }

  goBack(){
    this.arrow = this.cheesesService.backClicked()
    console.log(this.arrow)
  }

  ngOnInit(): void {
  }

}
