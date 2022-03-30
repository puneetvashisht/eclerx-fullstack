import { Component } from "@angular/core";

@Component({
    selector: 'app-badge',
    template:`
    <button type="button" class="btn btn-primary">
        Notifications <span class="badge bg-secondary">4</span>
    </button>
    `
})
export class BadgeComponent{

}