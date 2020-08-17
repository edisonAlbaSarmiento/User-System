import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class EmployeeeListComponent implements OnInit {

  employees: any;
  currentEmployee = null;
  currentIndex = -1;
  fullName = '';
  cellPhone = '';
  email = '';


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.retrieveTutorials();
  }

  retrieveTutorials() {
    this.employeeService.getAll()
      .subscribe(
        data => {
          this.employees = data;
          console.log('HOLA', data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveTutorials();
    this.currentEmployee = null;
    this.currentIndex = -1;
  }

  setEmployee(employee, index) {
    this.currentEmployee = employee;
    this.currentIndex = index;
  }

  searchEmployee() {
    this.employeeService.findByTitle(this.fullName)
      .subscribe(
        data => {
          this.employees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
