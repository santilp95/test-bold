import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './custom-checkbox.component.html',
  styleUrl: './custom-checkbox.component.css'
})
export class CustomCheckboxComponent {
  @Input() label: string = 'Ver todos';
  @Input() isChecked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.checkedChange.emit(this.isChecked);
  }
}
