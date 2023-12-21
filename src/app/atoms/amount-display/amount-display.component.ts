import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amount-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amount-display.component.html',
  styleUrl: './amount-display.component.css'
})
export class AmountDisplayComponent {
  @Input() amount: string = '';
  @Input() deduction?: string;
}
