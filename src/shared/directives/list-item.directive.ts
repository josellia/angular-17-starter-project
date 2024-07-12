import { Directive } from '@angular/core';

@Directive({
  selector: '[listItem]',
  standalone: true,
})
export class ListItemDirective {
  constructor() {}
}
