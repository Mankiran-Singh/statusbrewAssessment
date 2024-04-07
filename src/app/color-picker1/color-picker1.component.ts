import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-color-picker1',
  templateUrl: './color-picker1.component.html',
  styleUrls: ['./color-picker1.component.scss']
})
export class ColorPicker1Component  implements ControlValueAccessor{
  public disabled = false;
  public color!:string;
  public colors: string[] = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];
  public focusedIndex = 0;

  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor() { }

  writeValue(color: string): void {
    this.color = color;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  selectColor(color: string): void {
    this.color = color;
    this.onChange(color);
    this.onTouched();
  }

  handleKeydown(event: KeyboardEvent, color: string): void {
    const currentIndex = this.colors.indexOf(this.color);

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        this.focusedIndex = Math.max(currentIndex - 3, 0);
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.focusedIndex = Math.min(currentIndex + 3, this.colors.length - 1);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.focusedIndex = Math.max(currentIndex - 1, 0);
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.focusedIndex = Math.min(currentIndex + 1, this.colors.length - 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.selectColor(color);
        break;
    }
  }

}
