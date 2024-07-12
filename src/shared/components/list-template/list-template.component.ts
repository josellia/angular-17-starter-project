import { CommonModule, NgForOfContext } from '@angular/common';
import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ListTemplateComponent<T> implements OnInit {
  @Input() items: Array<T> = [];
  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<NgForOfContext<T>>;

  constructor() {}

  ngOnInit() {}
}
