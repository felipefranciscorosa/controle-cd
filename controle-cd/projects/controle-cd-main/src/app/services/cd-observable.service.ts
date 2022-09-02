import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cd } from '../model/cd';

@Injectable({
  providedIn: 'root'
})
export class CdObservableService {
  URL = 'http://localhost:3000/cds';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Cd[]|undefined>{
    return this.httpClient.get<Cd[]>(this.URL);
  }
  post(cd: Cd): Observable<Cd|undefined> {
    return this.httpClient
      .post<Cd>(this.URL, JSON.stringify(cd), this.httpOptions);
  }
  put(cd: Cd): Observable<Cd|undefined> {
    return this.httpClient
      .put<Cd>(`${this.URL}/${cd.id}`, JSON.stringify(cd), this.httpOptions);
  }
  delete(cd: Cd): Observable<Cd|undefined> {
    return this.httpClient
      .delete<Cd>(`${this.URL}/${cd.id}`, this.httpOptions);
  }

}
