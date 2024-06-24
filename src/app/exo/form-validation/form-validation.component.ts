import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css'],
})
export class FormValidationComponent {
  @ViewChild('form') form!: NgForm;
  credentials = {
    email: '',
    password: '',
  };

  passwordPattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z]).{8,}$');

  onSubmit() {
    if (this.form.invalid) {
      console.log(this.form);
    }
    console.log('coucou');
  }
}
