import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'button[app-selectable-button]',
  standalone: true,
  imports: [],
  template: '{{ label }}',
  styleUrl: './selectable-button.component.css',
})
export class SelectableButtonComponent {
  @Input() label: string = '';
  @Input() isActive: boolean = false;
  @Output() select = new EventEmitter<string>();


  @HostListener('click')
  selectButton() {
    this.select.emit(this.label);
  }
}
