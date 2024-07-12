import { ComponentRef } from '@angular/core';
import { ModalComponent } from '../shared/components/modal/modal.component';

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  close(): void {
    this.componentRef.destroy();
  }
}
