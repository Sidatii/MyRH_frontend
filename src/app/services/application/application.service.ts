import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/env";
import {Application} from "../../interface/application";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private _http: HttpClient) { }

  create(application: Application): Observable<Application> {
    return this._http.post<Application>(environment.API_URL + '/application/create', application);
  }


  getApplication(): Observable<any> {
    return this._http.get<any>(environment.API_URL + '/application/');
  }

  getApplicationById(id: number): Observable<Application> {
    return this._http.get<Application>(environment.API_URL + '/application/' + id);
  }

  addApplication(application: Application): Observable<Application> {
    return this._http.post<Application>(environment.API_URL + '/application/create', application);
  }

  updateApplication(application: Application): any {
    return this._http.patch<any>(environment.API_URL + '/application/update', application);
  }

  deleteApplication(id: number): any {
    return this._http.delete<any>(environment.API_URL + '/application/' + id);
  }



}
