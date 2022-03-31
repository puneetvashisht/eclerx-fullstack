import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  items: Array<string> = ['Item1', 'Item2', 'Item3'];
  itemSelected: string = ''

  handleItemSelect(item: string){
    console.log('In the parent...', item);
    this.itemSelected = item;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
