import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [],
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.css'
})
export class SubmitButtonComponent {
  @Input() label: string = 'Aplicar';

  // @Output() clicked = new EventEmitter<void>();

  // onClick() {
  //   this.clicked.emit();
  // }
}
