import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('title') caption: string = ''
  @Input('summary') summary: string = ''
  @Input('index') index: number = -9

  constructor() { }

  ngOnInit(): void {
  }

}
