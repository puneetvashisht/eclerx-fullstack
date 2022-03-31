import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css']
})
export class DropdownItemComponent implements OnInit {

  @Input() item : string = ''
  @Output() itemSelect : EventEmitter<string> = new EventEmitter();

  itemClick(){
    console.log('Item selected is : ', this.item);
    this.itemSelect.emit(this.item);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
