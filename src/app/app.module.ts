import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './counter/display/display.component';
import { ButtonComponent } from './counter/button/button.component';
import { FormTdfComponent } from './exo/form-tdf/form-tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './exo/reactive-form/reactive-form.component';
import { FormValidationComponent } from './exo/form-validation/form-validation.component';
import { ReactiveFormValidationComponent } from './exo/reactive-form-validation/reactive-form-validation.component';
import { AppRoutingModule } from './app-routing.module';
import { PecheComponent } from './router/peche/peche.component';
import { NotfoundComponent } from './router/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ButtonComponent,
    FormTdfComponent,
    ReactiveFormComponent,
    FormValidationComponent,
    ReactiveFormValidationComponent,
    PecheComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
