import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ClientCardComponent } from '../client-card/client-card.component';
import { Deal } from '../_models/deals';
import { DealsService } from '../_services/deals.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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

  Deal: Deal = {
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

  showDeletBtn: boolean = false;
  searchValue: string = "";

  loadDeals() {
    this.dealsService.getAllDeals().subscribe((response: any) => {
      this.allDeals = response.deals;
      this.filterDeals()
    })
  }

  filterDeals() {
    this.pvDeals = this.allDeals.filter((deal) => deal.status == "Potential Value");
    this.FocusDeals = this.allDeals.filter((deal) => deal.status == "Focus");
    this.ContDeals = this.allDeals.filter((deal) => deal.status == "Contact Made");
    this.OfferDeals = this.allDeals.filter((deal) => deal.status == "Offer Sent");
    this.ReadyDeals = this.allDeals.filter((deal) => deal.status == "Getting Ready");
  }

  moveDeal(event: CdkDragDrop<Deal[]>) {
    this.showDeletBtn = false;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
    else {
      transferArrayItem(event.previousContainer.data, event.container.data,event.previousIndex,event.currentIndex);
      
      switch (event.container.id) {
        case "cdk-drop-list-0": event.container.data[event.currentIndex].status = "Potential Value"
          break;
        case "cdk-drop-list-1": event.container.data[event.currentIndex].status = "Focus"
          break;
        case "cdk-drop-list-2": event.container.data[event.currentIndex].status = "Contact Made"
          break;
        case "cdk-drop-list-3": event.container.data[event.currentIndex].status = "Offer Sent"
          break;
        case "cdk-drop-list-4": event.container.data[event.currentIndex].status = "Getting Ready"
          break;
      }

    }
  }

  onDragStart() {
    this.showDeletBtn = true;
  }


}