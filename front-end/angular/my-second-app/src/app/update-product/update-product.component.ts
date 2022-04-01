import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  updateEmployee(id: string, salary:  string){
    this.http.patch('http://localhost:8000/employees/'+ id, {salary: parseInt(salary)})
    .subscribe((res)=> console.log(res))
  }

}
