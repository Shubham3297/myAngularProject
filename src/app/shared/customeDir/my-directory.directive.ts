import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirectory]'
})
export class MyDirectoryDirective implements AfterViewInit {

  constructor(private _elf: ElementRef) { }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');

    this._elf.nativeElement.style.color = "red";
  }

  change(colorChange: string) {
    this._elf.nativeElement.style.color = colorChange;
  }
}
