import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateService } from '../../shared';
import { SelectableButtonComponent } from '../../atoms';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [SelectableButtonComponent,CommonModule],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonGroupComponent {
  selectedButton: SelectableButtonComponent | null = null;
  constructor(private stateService: StateService) {
    const selectedButtonLabel = this.stateService.getSelectedButton();
    this.selectedButton = { label: selectedButtonLabel, isActive: true } as SelectableButtonComponent;


  }

  selectButton(button: SelectableButtonComponent): void {
    if (this.selectedButton) {
      this.selectedButton.isActive = false;
    }

    button.isActive = true;
    this.selectedButton = button;

    this.stateService.setTitle(button.label);
  }
}
