import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  show: boolean = false;
  items: Array<string> = ['Item1', 'Item2', 'Item3']
  item: string = 'Select Items'

  toggleShow(){
    this.show = !this.show;
  }

  handleItemSelect(item: string){
    console.log('In parent: item selected by child ', item);
    this.item = item;
    this.show = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
