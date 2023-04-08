import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deal } from '../_models/deals';
import { DealsService } from '../_services/deals.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private dealsService: DealsService) { }

  ngOnInit(): void {
    this.loadDeals();
  }
  allDeals:Deal[]=[];
  loadDeals() {
    this.dealsService.getAllDeals().subscribe((response: any) => {
      this.allDeals=response.deals;
    })
  }

}
