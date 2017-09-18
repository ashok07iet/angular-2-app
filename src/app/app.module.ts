import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventAPPComponent } from './event-app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventAPPComponent
  ],
  bootstrap: [EventAPPComponent],
  providers: []
})
export class AppModule { }
