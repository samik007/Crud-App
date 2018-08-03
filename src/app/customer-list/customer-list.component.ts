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
  dtOptions: DataTables.Settings = {};
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = []; // Home page Data table Fix --> No data issue
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data.json();
    });
  }

}
