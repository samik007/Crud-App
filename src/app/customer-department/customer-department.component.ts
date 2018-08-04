import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Department } from '../shared/department/department.model';

@Component({
  selector: 'app-customer-department',
  templateUrl: './customer-department.component.html',
  styleUrls: ['./customer-department.component.css']
})
export class CustomerDepartmentComponent implements OnInit {
  deptForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.deptForm = new FormGroup({
      'departmentName': new FormControl("", Validators.required),
      'departmentLoc': new FormControl("", Validators.required)
    });
  }

  onSubmit(){
    const dept = new Department(
                      this.deptForm.value['departmentName'], 
                     this.deptForm.value['departmentLoc']);
    console.log(dept.departmentName + " " + dept.departmentLoc);
    this.deptForm.reset();
  }
}
