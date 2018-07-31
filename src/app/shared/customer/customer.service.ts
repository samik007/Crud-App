import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: Http) { }
  
  getCustomers(){
    return this.http
    .get('http://localhost:8088/rest/customers/all');
  }
}


