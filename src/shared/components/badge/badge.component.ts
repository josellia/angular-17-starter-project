import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { HttpNotificationService } from '../../../services/http-notification.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  standalone: true,
})
export class BadgeComponent implements OnInit {
  notificationCount = 0;
  notificationCountHttp = 0;

  constructor(
    private notificationService: NotificationService,
    private httpNotificationService: HttpNotificationService
  ) {}

  ngOnInit() {
    this.notificationService.getNotificationCount().subscribe((count) => {
      this.notificationCount = count;
    });

    this.httpNotificationService.getNotificationCount().subscribe((count) => {
      // console.log('COUNT', count);
      this.notificationCountHttp = count;
    });
  }
}
