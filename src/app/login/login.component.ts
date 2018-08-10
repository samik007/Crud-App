import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../shared/customer/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = { username: '', password: '' };

  constructor(private customerService: CustomerService) { }

  ngOnInit() { }

  login(form: NgForm) {
    this.credentials = { 
        username: form.value.username, 
        password: form.value.password 
      };
      console.log(this.credentials.username);
      console.log(this.credentials.password);

    this.customerService.authenticate(this.credentials, () => {
      console.log('true');
    });
    return false;
  }

}
