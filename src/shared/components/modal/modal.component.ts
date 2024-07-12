import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { IActionsModel, ModalConfig } from '../../../interfaces/modal-config';
import { ModalRef } from '../../../models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalComponent implements OnInit {
  @Input() config!: ModalConfig;
  modalRef!: ModalRef;
  @Input() size? = 'md';
  @Input() title? = 'Modal title';

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();
  // @HostBinding('@fade') fade = true;

  // @ContentChild('templateFooter') footer!: TemplateRef<any>;

  // @ViewChild('modalBody', { static: true }) modalBody!: ElementRef;
  // @ViewChild('modalFooter', { static: true }) modalFooter!: ElementRef;
  // @ViewChild('backdrop', { static: true }) backdrop!: ElementRef;
  // @ViewChild('modal', { static: true }) modaL!: ElementRef;

  constructor(private elementref: ElementRef) {}

  ngOnInit() {}

  close() {
    this.elementref.nativeElement.remove();
    this.closeEvent.emit();
  }

  submit() {
    this.elementref.nativeElement.remove();
    this.submitEvent.emit();
  }

  // private styleFooter(action: IActionsModel, button: any) {
  //   if (action.linkAlign) {
  //     this.addFooterClasses(button, action.linkAlign);
  //   } else if (action.buttonAlign) {
  //     this.addFooterClasses(button, action.buttonAlign);
  //   }
  //   this.renderer.appendChild(this.modalFooter.nativeElement, button);

  //   this.renderer.listen(button, 'click', (event) => {
  //     event.preventDefault();
  //     this.renderer.removeClass(this.modaL.nativeElement, 'add');
  //     this.renderer.removeClass(this.backdrop.nativeElement, 'add');
  //     action.action();
  //   });
  // }

  // private buildFooterButtons() {
  //   this.config?.callsToAction?.forEach((data) => {
  //     const button = this.styleBody(data);
  //     this.styleFooter(data, button);
  //   });
  // }
}
