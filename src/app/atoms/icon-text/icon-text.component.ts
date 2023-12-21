import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-text',
  standalone: true,
  imports: [],
  templateUrl: './icon-text.component.html',
  styleUrl: './icon-text.component.css'
})
export class IconTextComponent {
  @Input() iconClass: string = ''; // This will be like 'fas fa-check' for Font Awesome
  @Input() text: string = '';
}
