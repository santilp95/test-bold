import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selectable-button',
  standalone: true,
  imports: [],
  templateUrl: './selectable-button.component.html',
  styleUrl: './selectable-button.component.css'
})
export class SelectableButtonComponent {
  @Input() label: string = '';
  @Input() isActive: boolean = false;
  @Output() select = new EventEmitter<void>();

  selectButton() {
    this.select.emit();
  }
}
