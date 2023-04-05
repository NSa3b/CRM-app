import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Deals } from '../_models/deals';


@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private http:HttpClient) { }
  baseUrl = environment.apiUrl;

  getAllDeals(){
    this.http.get<Deals[]>(this.baseUrl);
  }

}
