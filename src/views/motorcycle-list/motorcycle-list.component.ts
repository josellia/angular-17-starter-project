import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MotorCycle } from '../../core/models/motorcycle';
import { MotorcycleService } from '../../services/motorcycle.service';
import { NotificationService } from '../../services/notification.service';
import { CustomListComponent } from '../../shared/components/custom-list/custom-list.component';
import { RecursionListComponent } from '../../shared/components/recursion-list/recursion-list.component';

@Component({
  selector: 'app-motorcycle-list',
  templateUrl: './motorcycle-list.component.html',
  styleUrls: ['./motorcycle-list.component.css'],
  standalone: true,
  imports: [CustomListComponent, CommonModule, RecursionListComponent],
})
export class MotorcycleListComponent implements OnInit {
  motorcycles: MotorCycle[] = [];

  constructor(
    private motorcycleService: MotorcycleService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.motorcycles = [];
    this.motorcycleService.setState(this.motorcycles);
  }

  addMotorCicle() {
    const motoNames = ['lulu', 'lili', 'lolo'];
    const randoNames = Math.floor(Math.random() * motoNames.length);

    this.motorcycles.push({
      name: motoNames[randoNames],
      model: 'L',
    });
    this.motorcycleService.setState(this.motorcycles);
    this.notificationService.incrementNotificationCount();
  }

  removeMotorCycle(index: number) {
    if (index > -1) {
      this.motorcycles.splice(index, 1);
      this.notificationService.decrementNotificationCount();
    }
  }
}
