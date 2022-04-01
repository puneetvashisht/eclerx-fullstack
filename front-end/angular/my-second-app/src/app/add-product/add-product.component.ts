import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  addEmployee(name: string, salary: string){

    this.http.post('http://localhost:8000/employees', {name, salary: parseInt(salary)})
    .subscribe(data=> console.log(data));

  }

}
