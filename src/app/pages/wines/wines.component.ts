import { WinesService } from './../../shared/wines.service';
import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/models/wine';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {
  public wines: Wine[];

  constructor(private winesService:WinesService) {
  }

  obtainAllWines(){
    this.winesService.getWines().subscribe((data: Wine[])=> {
      this.wines = data;
      });      
  }
  

  ngOnInit(): void {
    this.obtainAllWines();
  }

}
