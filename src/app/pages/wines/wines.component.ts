import { WinesService } from './../../shared/wines.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {
  public wineInfo: boolean;

  constructor(private winesService:WinesService) {
    this.wineInfo = true
  }

  goBack(){
    this.winesService.backClicked()
  }

  showWinesInfo(){
    if(this.wineInfo){
      this.wineInfo = false;
        }else{
            this.wineInfo = true;
        }
  }
  

  ngOnInit(): void {
  }

}
