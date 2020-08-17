import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class AddEmployeeComponent{
  employeeData = {
    fullName: '',
    email: '',
    cellPhone: ''
  };
  submitted = false;
  errorMessage = false;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  saveEmployee() {
    const data = {
      fullName: this.employeeData.fullName,
      email: this.employeeData.email,
      cellPhone: this.employeeData.cellPhone
    };

    this.employeeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          this.errorMessage = true;
          console.log('ERROR this.errorMessage',this.errorMessage);

          console.log('ERROR',error);
        });
  }

  newEmployee() {
    this.submitted = false;
    this.employeeData = {
      fullName: '',
      email: '',
      cellPhone: '',
    };
  }
}
