import { Component, EventEmitter, Output } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options: City[];
  selectedOption: City;
  placeholderLabel: string = 'Select an option';

  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.options = [
      { name: 'Option 1', code: 'Option 1' },
      { name: 'Option 2', code: 'Option 2' },
      { name: 'Option 3', code: 'Option 3' },
      { name: 'Option 4', code: 'Option 4' },
      { name: 'Option 5', code: 'Option 5' },
      { name: 'Option 6', code: 'Option 6' },
      { name: 'Option 7', code: 'Option 7' },
    ];
  }

  onOptionSelected(selectedValue: any): void {
    this.optionSelected.emit(selectedValue);
    console.log('Emitted', selectedValue);
  }
}
