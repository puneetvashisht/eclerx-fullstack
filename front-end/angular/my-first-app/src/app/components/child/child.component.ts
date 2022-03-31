import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() items : Array<string> = []
  @Output() itemSelect: EventEmitter<string> = new EventEmitter();

  itemClick(item: string){
      console.log('Clickd on ', item);
      this.itemSelect.emit(item)
      
  }

  ngOnInit(): void {
  }

}
