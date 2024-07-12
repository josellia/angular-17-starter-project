import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CustomListComponent implements OnInit {
  @Input() isOrderList = true;
  @Input() item!: string | number;
  @Input() isDataIcon = false;
  @Input() icon = '';
  constructor() {}

  ngOnInit() {}
}
