import { Component } from '@angular/core';
import { SelectableButtonComponent } from '../../atoms/selectable-button/selectable-button.component';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [SelectableButtonComponent],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css'
})
export class ButtonGroupComponent {
  selectedButton: string = 'hoy';

  selectButton(button: string): void {
    this.selectedButton = button;
  }
}
