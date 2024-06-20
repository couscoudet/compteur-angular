import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  action: string = 'action';
  @Output() clickAction = new EventEmitter();
  @Input()
  isDisable: boolean = false;
}
