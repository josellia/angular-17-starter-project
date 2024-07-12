import { TemplateRef } from '@angular/core';

export interface ModalConfig {
  templateRef?: TemplateRef<any>;
  title?: string;
  subtitle?: string;
  size?: string;
  onClose?: () => void;
  callsToAction?: Array<IActionsModel>;
}

export interface IActionsModel {
  label: string;
  HtmlElementType: 'a' | 'button';
  buttonAlign?: 'left' | 'center' | 'right';
  linkAlign?: 'left' | 'center' | 'right';
  action: () => void;
}
