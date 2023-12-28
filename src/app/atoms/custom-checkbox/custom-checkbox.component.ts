import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface CheckboxState {
  name: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './custom-checkbox.component.html',
  styleUrl: './custom-checkbox.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomCheckboxComponent),
      multi: true
    }
  ]
})
export class CustomCheckboxComponent implements ControlValueAccessor{
  @Input() name: string = 'verTodos';
  @Input() label: string = 'Ver todos';
  @Input() value: boolean = false;
  @Output() checkedChange = new EventEmitter<CheckboxState>();


  private onChange = (isChecked: boolean) => {};
  private onTouched = () => {};


  onCheckboxChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.checked;
    this.onChange(this.value);
    this.onTouched();
    this.checkedChange.emit({ name: this.name, isChecked: this.value });
  }

  writeValue(isChecked: boolean): void {
    this.value = isChecked;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
