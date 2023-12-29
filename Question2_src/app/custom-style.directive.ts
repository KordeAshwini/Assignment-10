import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective 
{
  constructor() 
  {}
  
  @HostBinding('style.fontWeight') fontWeight = "bold";
  @HostBinding('style.backgroundColor') backgroundColor = "yellow";


}
