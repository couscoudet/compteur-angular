import { Component } from '@angular/core';

@Component({
  selector: 'app-form-tdf',
  templateUrl: './form-tdf.component.html',
  styleUrls: ['./form-tdf.component.css'],
})
export class FormTdfComponent {
  credentials = {
    email: '',
    password: '',
  };

  onSubmit() {
    console.log(this.credentials);
  }
}
