import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() previousValue: number;
  @Input() currentValue: number;

  protected _elementClass: string[] = [];

  @HostBinding('class')
  get elementClass(): string {
    return this._elementClass.join(' ');
  }
  set(val: string) {
    this._elementClass = val.split(' ');
  }

  constructor() {
  }

  ngOnChanges() {
    this._elementClass = this._elementClass.filter(o => o !== 'backgroundGreen' && o !== 'backgroundRed');
    if (this.previousValue < this.currentValue) {
      this._elementClass.push('backgroundGreen');
    } else if (this.previousValue > this.currentValue) {
      this._elementClass.push('backgroundRed');
    }
    setTimeout(() => {
      this._elementClass = this._elementClass.filter(o => o !== 'backgroundGreen' && o !== 'backgroundRed');
    }, 1000); // the animation has 1 second duration

  }
}
