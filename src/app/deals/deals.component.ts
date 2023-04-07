import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { ClientCardComponent } from '../client-card/client-card.component';
import { Deal } from '../_models/deals';
import { DealsService } from '../_services/deals.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor(private dealsService: DealsService) { }

  ngOnInit(): void {
    this.loadDeals();
  }

  Deal:Deal={
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    status: "",
    date: "",
    probability_status: "",
    state: ""
  }




  allDeals: Deal[] = [];

  pvDeals: Deal[] = [];
  FocusDeals: Deal[] = [];
  ContDeals: Deal[] = [];
  OfferDeals: Deal[] = [];
  ReadyDeals: Deal[] = [];

  loadDeals() {
    this.dealsService.getAllDeals().subscribe((response: any) => {
      console.log(response.deals);
      this.allDeals = response.deals;

      this.pvDeals = this.allDeals.filter((deal) => deal.status == "Potential Value");
      this.FocusDeals = this.allDeals.filter((deal) => deal.status == "Focus");
      this.ContDeals = this.allDeals.filter((deal) => deal.status == "Contact Made");
      this.OfferDeals = this.allDeals.filter((deal) => deal.status == "Offer Sent");
      this.ReadyDeals = this.allDeals.filter((deal) => deal.status == "Getting Ready");
    })
  }

  move(event: CdkDragDrop<Deal[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

    }
  }

  searchValue:string="";
  
  onSearch(){
    console.log(this.searchValue);

  }

 

  onStatusSelect(event:any){
    console.log(event);
  }




}
