import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificationCount = 0;
  private notificationSubject = new Subject<number>();

  getNotificationCount() {
    return this.notificationSubject.asObservable();
  }
  incrementNotificationCount() {
    this.notificationCount++;
    this.notificationSubject.next(this.notificationCount);
  }
  decrementNotificationCount() {
    if (this.notificationCount !== 0) {
      this.notificationCount--;
      this.notificationSubject.next(this.notificationCount);
    }
  }
  resetNotificationCount() {
    this.notificationCount = 0;
    this.notificationSubject.next(this.notificationCount);
  }
}
