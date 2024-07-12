import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[wrapper]',
  standalone: true,
})
export class WrapperDirective {
  constructor(public template: TemplateRef<any>) {}
}
