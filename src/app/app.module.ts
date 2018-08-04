import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { CustomerService } from './shared/customer/customer.service';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { CustomerDepartmentComponent } from './customer-department/customer-department.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerDataComponent,
    CustomerDepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
