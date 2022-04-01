import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(public http: HttpClient) { }


  employees: Array<Employee> = []

  deleteEmployee(id: number){
    // http delete
    this.http.delete('http://localhost:8000/employees/' + id)
    .subscribe(data => console.log(data))
  }

  ngOnInit(): void {
    console.log('Initialized once ..')

    this.http.get('http://localhost:8000/employees')
    .subscribe((data: any) => {
      this.employees = data
    })

    // http.get
    // extract data and put into employees array
  }

}
