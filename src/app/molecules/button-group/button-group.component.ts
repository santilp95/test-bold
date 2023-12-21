import { Component, ViewEncapsulation } from '@angular/core';

import { SelectableButtonComponent } from '../../atoms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [SelectableButtonComponent,CommonModule],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonGroupComponent {
  selectedButton: SelectableButtonComponent | null = null;;

  selectButton(button: SelectableButtonComponent): void {
    if (this.selectedButton) {
      this.selectedButton.isActive = false;
    }

    button.isActive = true;
    this.selectedButton = button;

    console.log(`Selected button: ${button.label}`);
  }
}
