import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ModalRef } from '../../models/modal-ref';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ComponentConfig } from '../../interfaces/component-config.model';
import { ConfigurationService } from '../../services/modal/configuration.service';
import { ModalService } from '../../services/modal/modal.service';
import { Contact } from './models/contact';
import { ContactPreviewComponent } from './contact-preview/contact-preview.component';
import { ListTemplateComponent } from '../../shared/components/list-template/list-template.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-render-components',
  templateUrl: './render-components.component.html',
  styleUrls: ['./render-components.component.css'],
  standalone: true,
  imports: [
    ModalComponent,
    ContactPreviewComponent,
    ListTemplateComponent,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RenderComponentsComponent implements OnInit {
  modalRef!: ModalRef;

  @ViewChild('modal') modalTemplateRef!: TemplateRef<any>;
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  // triggerModal(event: Event) {
  //   event.preventDefault();

  //   const modalData: ComponentConfig = {
  //     componentType: 'modal',
  //     dynamicComponentType: ModalComponent,
  //     data: {
  //       title: 'Teste do modal',
  //       // templateRef: this.modalTemplateRef,
  //       onClose: () => this.modalRef.close(),
  //     },
  //   };
  // }
  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate, { size: 'lg', title: 'Foo' })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }
  // LIST-TEMPLATE
  contacts: Contact[] = [
    new Contact({
      name: 'San Smith',
      avatar:
        'https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600',
      email: 'sansmith@test.com',
      phone: '00000',
    }),

    new Contact({
      name: 'Lucy Smith',
      avatar:
        'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600',
      email: 'lucymith@test.com',
      phone: '00000',
    }),
  ];
}
