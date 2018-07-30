import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: Http) { }
  
  getCars(){
    return this.http
    .get('http://localhost:8088/rest/customers/all');
  }
}


