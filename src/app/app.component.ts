import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.disableButtonRemove = true;
  }

  title = 'td2_2';
  displayedValue: number = 0;
  add(): void {
    this.displayedValue++;
    this.disableButtonRemove = false;
    this.displayedValue >= 10 && (this.disableButtonAdd = true);
  }
  remove(): void {
    this.displayedValue--;
    this.disableButtonAdd = false;
    this.displayedValue <= 0 && (this.disableButtonRemove = true);
  }
  disableButtonAdd: boolean = false;
  disableButtonRemove: boolean = false;
}
