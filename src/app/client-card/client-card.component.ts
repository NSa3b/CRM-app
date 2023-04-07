import { Component, OnInit, Input } from '@angular/core';
import { Deal } from '../_models/deals';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() deal:Deal={
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
  };

}
