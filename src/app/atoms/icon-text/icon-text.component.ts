import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-text',
  standalone: true,
  imports: [],
  templateUrl: './icon-text.component.html',
  styleUrl: './icon-text.component.css'
})
export class IconTextComponent {
  @Input() iconClass: string = '';
  @Input() text: string = '';
  @Input() deduction?: string;
}
