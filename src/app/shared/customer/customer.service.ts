import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: Http) { }
  
  getCustomers(){
    return this.http
    .get('http://localhost:8088/rest/customers/all');
  }

  getCustomersById(id: number){
    return this.http
    .get('http://localhost:8088/rest/customers/all/' + id);
  }

  saveCustomer(customer: Customer){
    return this.http
    .post('http://localhost:8088/rest/customers/load', customer);
  }

  deleteCustomer(id: number){
    console.log("service" + id);
    return this.http
    .delete('http://localhost:8088/rest/customers/delete/' + id);
  }
}


