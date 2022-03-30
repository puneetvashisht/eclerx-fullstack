import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BadgeComponent } from './components/badge.component';
import { MessageComponent } from './components/message.component';
import { CardComponent } from './components/card/card.component';
import { Card3Component } from './components/card3/card3.component';

@NgModule({
  declarations: [
    AppComponent, MessageComponent, BadgeComponent, CardComponent, Card3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
