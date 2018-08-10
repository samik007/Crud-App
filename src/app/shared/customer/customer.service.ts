import { Injectable } from '@angular/core';
import { Http, HttpHeaders } from '@angular/http';

import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  authenticated = false;

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

  authenticate(credentials, callback) {
    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
      if (response['name']) {
          this.authenticated = true;
      } else {
          this.authenticated = false;
      }
      return callback && callback();
  });

  }
}


