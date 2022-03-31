import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'React';
  employees: Array<Employee> = [
    {firstName: "Ravi", lastName: 'Sharma', salary: 66666},
    {firstName: "Harshit", lastName: "Tomar", salary: 34434}
  ]

  courses : Array<any> = [
    {title: 'Angular', summary: 'framework from google!'},
    {title: 'React', summary: 'library from facebook!'}
  ]


}
