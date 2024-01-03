import { Injectable } from '@angular/core';
import {Offer} from "../../interface/offer";
import {Observable} from "rxjs";
import {environment} from "../../environment/env";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private _http: HttpClient) { }

  get(id: number): Observable<Offer> {
    return this._http.get<Offer>(environment.API_URL + '/offer/' + id);
  }

  getAllPaginated(): Observable<any> {
    return this._http.get<any>(environment.API_URL + '/offer/');
  }
}
