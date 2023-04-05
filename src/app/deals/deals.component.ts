import { Component, OnInit } from '@angular/core';
import { ClientCardComponent } from '../client-card/client-card.component';
import { Deals } from '../_models/deals';
import { DealsService } from '../_services/deals.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor(private dealsService:DealsService) { }

  ngOnInit(): void {
  }


  
  x:number=4;
  // loadDeals(){
  //   this.dealsService.getAllDeals().subscribe((response: any) => {
  //     console.log(response);  
  //   })

  // }

}
