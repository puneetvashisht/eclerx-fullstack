import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BadgeComponent } from './components/badge.component';
import { MessageComponent } from './components/message.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { CardComponent } from './components/card/card.component';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';

@NgModule({
  declarations: [
    AppComponent, MessageComponent, BadgeComponent, ViewEmployeesComponent, CardComponent, ViewCoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
