import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  employeeForm: FormGroup;

  ngOnInit() {
      this.employeeForm = this.fb.group({
      fullName: [''],
      email: [''],
      cellPhone: [''],
    })
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService
  ){ }
  submitForm() {
    this.crudService.create(this.employeeForm.value).subscribe(res => {
      console.log('Employee created!', res)
      this.router.navigateByUrl('/crud/home/')
    )}

}
