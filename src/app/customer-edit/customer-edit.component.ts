import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { Customer } from '../shared/customer/customer.model';
import { CustomerService } from '../shared/customer/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit, OnDestroy {
  customer: Customer = new Customer(0, "", "", "");
  subscription: Subscription;
  editMode = false;
  id: number;
  @ViewChild('f') customerForm: NgForm;


  constructor(private route: ActivatedRoute,
                private router: Router,
                private customerService: CustomerService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe( params => {
        this.id = +params['id'];
        if(this.id){
          this.editMode = true;
          this.customerService.getCustomersById(this.id).subscribe( data => {
              if(data){
                this.customer = data.json();
                this.customerForm.setValue({
                  name: this.customer.name,
                  email: this.customer.email,
                  date: this.customer.date
                })
              }else{
                console.log(`Car with id '${this.id}' not found, returning to list`);
                this.gotoList();
              }
          });
        }
      });
  }

  onAddCustomer(form: NgForm){
    const value = form.value;
    if(this.editMode){
      this.customer = new Customer(this.id, value.name, value.email, value.date);
    }else{
      this.customer = new Customer(0, value.name, value.email, value.date);
    }
    this.customerService.saveCustomer(this.customer).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
    this.editMode=false;
    form.reset();
  }

  onDelete(){
    this.customerService.deleteCustomer(this.id).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
    this.editMode=false;
    this.customerForm.reset();
  }

  onClear(){
    this.customerForm.reset();
    this.editMode=false;
  }

  gotoList() {
    this.router.navigate(['/car-list']);
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
