import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/env";
import {Agent} from "../../interface/agent";

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private _http: HttpClient) { }

  getAgent() {
    return this._http.get(environment.API_URL + '/agent');
  }

  getAgentById(id: number) {
    return this._http.get(environment.API_URL + '/agent/' + id);
  }

  addAgent(agent: Agent) {
    return this._http.post(environment.API_URL + '/agent/create', agent);
  }

  updateAgent(agent: Agent) {
    return this._http.patch(environment.API_URL + '/agent/update', agent);
  }

  deleteAgent(id: number) {
    return this._http.delete(environment.API_URL + '/agent/' + id);
  }
}
