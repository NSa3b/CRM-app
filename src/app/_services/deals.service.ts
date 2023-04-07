import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Deal } from '../_models/deals';


@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private http:HttpClient) { }
  baseUrl = environment.apiUrl;

  getAllDeals(){
    return this.http.get<Deal[]>(this.baseUrl);
  }

  addDeal(model: Deal) {
    return this.http.post(this.baseUrl + "/add",model);
  }

}
