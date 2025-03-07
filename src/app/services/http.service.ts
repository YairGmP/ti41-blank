import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiURL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  post(endpoint: string, data: any){
    return this.httpClient.post(`${this.apiURL}/${endpoint}`, data);
  }
}
