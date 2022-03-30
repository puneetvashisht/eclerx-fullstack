import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BadgeComponent } from './components/badge.component';
import { MessageComponent } from './components/message.component';

@NgModule({
  declarations: [
    AppComponent, MessageComponent, BadgeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
