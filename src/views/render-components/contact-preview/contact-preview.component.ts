import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
  standalone: true,
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact!: Contact;
  constructor() {}

  ngOnInit() {}
}
