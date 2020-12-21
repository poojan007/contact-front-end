import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Contact {
  id: number;
  name: string;
  description: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  API_URL = 'http://localhost:8080'

  constructor(
    private http: HttpClient
  ) { }

  getContactList(){
    return this.http.get<any>(`${this.API_URL}/contact/`, this.httpOptions);
  }

  postContact(contact){
    return this.http.post<any>(`${this.API_URL}/contact/`, contact, this.httpOptions)
  }
}
