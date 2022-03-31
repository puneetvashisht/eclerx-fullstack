import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  @Input() courses : Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

}
