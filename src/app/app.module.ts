import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './counter/display/display.component';
import { ButtonComponent } from './counter/button/button.component';
import { FormTdfComponent } from './exo/form-tdf/form-tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './exo/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ButtonComponent,
    FormTdfComponent,
    ReactiveFormComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
