import { Component, OnInit } from '@angular/core';
import { CrudService } from '../data.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(public crudService: CrudService) { }

  ngOnInit() {

    this.crudService.getAll().subscribe((data: Employee[])=>{
      console.log(data);
      this.employees = data;
    })
  }

}
