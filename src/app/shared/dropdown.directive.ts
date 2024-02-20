import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') private toggled: boolean = false;
  @HostListener('click') toggle() {
    this.toggled = !this.toggled;
  }

}
