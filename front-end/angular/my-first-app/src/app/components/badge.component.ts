import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html'
})
export class BadgeComponent{
    // fields
    count: number = 0
    @Input('caption') caption : string = 'Inbox'

    // methods
    incrementCount(){
        console.log(this.count)
        this.count++;
    }

}