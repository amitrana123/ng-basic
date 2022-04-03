import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') appInputFormat: string = '';
  //@Input('format') this.format;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log("on focus");
  }

  @HostListener('blur') onBlur() {
    console.log("on blur");
    let value: string = this.el.nativeElement.value;
    if (this.appInputFormat == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  } 

}
