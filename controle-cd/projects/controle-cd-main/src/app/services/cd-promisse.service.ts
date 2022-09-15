import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cd } from '../model/cd';

@Injectable({
  providedIn: 'root'
})
export class CdPromisseService {
  URL = 'http://localhost:3000/cds';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpClient: HttpClient) { }
  get(): Promise<Cd[]|undefined>{
    return this.httpClient.get<Cd[]>(this.URL).toPromise();
  }
  post(cd: Cd): Promise<Cd|undefined> {
    return this.httpClient
      .post<Cd>(this.URL, JSON.stringify(cd), this.httpOptions)
      .toPromise();
  }
  put(cd: Cd): Promise<Cd|undefined> {
    return this.httpClient
      .put<Cd>(`${this.URL}/${cd.id}`, JSON.stringify(cd), this.httpOptions)
      .toPromise();
  }
  delete(cd: Cd): Promise<Cd|undefined> {
    return this.httpClient
      .delete<Cd>(`${this.URL}/${cd.id}`, this.httpOptions)
      .toPromise();
  }

}
