import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent {


  @Input('employees') employees : Array<Employee> = []

  constructor() { }


}
