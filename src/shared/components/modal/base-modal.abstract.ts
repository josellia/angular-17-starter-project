import { Inject, Renderer2 } from '@angular/core';
import { IActionsModel } from '../../../interfaces/modal-config';

export abstract class BaseModal {
  private renderer2 = Inject(Renderer2);

  addFooterClasses(button: any, alingnType: string): void {
    this.renderer2.addClass(button, 'modal-action');

    switch (alingnType) {
      case 'left':
        this.renderer2.addClass(button, 'left');
        break;

      case 'right':
        this.renderer2.addClass(button, 'right');
        break;

      case 'center':
        this.renderer2.addClass(button, 'center');
        break;
    }
  }

  styleBody(action: IActionsModel) {
    const button = this.renderer2.createElemnt(action.HtmlElementType);

    if (action.HtmlElementType !== 'a') {
      this.renderer2.setAttribute(button, 'href', '#');
    }
    this.renderer2.appendChild(button, this.renderer2.createText(action.label));

    return button;
  }
}
