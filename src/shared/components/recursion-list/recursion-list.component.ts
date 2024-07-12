import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ListItemDirective } from '../../directives/list-item.directive';

@Component({
  selector: 'app-recursion-list',
  templateUrl: './recursion-list.component.html',
  styleUrls: ['./recursion-list.component.css'],
  imports: [CommonModule, ListItemDirective],
  standalone: true,
})
export class RecursionListComponent implements OnInit {
  @Input() items!: any[];
  @Input() isUnordered = true;

  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;
  constructor() {}

  ngOnInit() {
    // console.log(this.items);
  }
}
