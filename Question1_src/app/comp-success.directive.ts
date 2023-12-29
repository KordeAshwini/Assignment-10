import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective 
{

  constructor(private obj: ElementRef) 
  { }

  @HostListener ('mouseenter') OnMouseEnter()
  {
    this.obj.nativeElement.style.color = 'green';
  }

  @HostListener('mouseleave') OnMouseLeave()
  {
    this.obj.nativeElement.style.color = 'black';
  }

}
