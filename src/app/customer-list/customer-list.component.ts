import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { CustomerService } from '../shared/customer/customer.service';
import { Customer } from '../shared/customer/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data.json();
    })
  }

}
