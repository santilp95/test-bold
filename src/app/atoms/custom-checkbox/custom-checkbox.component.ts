import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() value: string = 'verTodos';
  @Input() label: string = 'Ver todos';
  @Input() isChecked: boolean = false;
  @Output() checkedChange = new EventEmitter<{ value: string, isChecked: boolean }>();


  private onChange = (isChecked: boolean) => {};
  private onTouched = () => {};


  onCheckboxChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.isChecked = input.checked;
    this.onChange(this.isChecked);
    this.onTouched();
    this.checkedChange.emit({ value: this.value, isChecked: this.isChecked });
  }

  writeValue(isChecked: boolean): void {
    this.isChecked = isChecked;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
