import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/customer-list', pathMatch: 'full'},
    {path: 'customer-list', component: CustomerListComponent },
    {path: 'customer-data', component: CustomerDataComponent },
    {path: 'customer-add', component: CustomerEditComponent },
    {path: 'customer-edit/:id', component: CustomerEditComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
}