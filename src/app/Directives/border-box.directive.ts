import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[BorderBox]'
})
export class BorderBoxDirective implements OnChanges {
// property decorator
@Input() defaultColor:string ="darkred";
@Input("BorderBox") hoverColor:string="purple";
// private elem:ElementRef;
  constructor(private elem:ElementRef) {
    // this.elem = =elem;
    // document.getElementById("").style.border=value
  //  elem.nativeElement.style.border=`2px solid ${this.defaultColor}`;
   }
  ngOnChanges(): void {
    this.elem.nativeElement.style.border=`2px solid ${this.defaultColor}`;
  }

  //  @HostListener("eventNames") funcName
  // method decorator
  @HostListener('mouseover') mouseoverFunc(){
    
   this.elem.nativeElement.style.border=`3px dashed ${this.hoverColor}`
  }
  @HostListener('mouseout') mouseoutFunc(){
    this.elem.nativeElement.style.border=`2px solid ${this.defaultColor}`
   }
}
