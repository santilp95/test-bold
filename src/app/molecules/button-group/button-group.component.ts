import { Component, ViewEncapsulation } from '@angular/core';

import { SelectableButtonComponent } from '../../atoms';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [SelectableButtonComponent],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonGroupComponent {
  selectedButton: string = 'hoy';

  selectButton(label: string): void {
    this.selectedButton = label;
    console.log(`Selected button: ${label}`);
  }
}
