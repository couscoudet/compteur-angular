import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './counter/display/display.component';
import { ButtonComponent } from './counter/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
