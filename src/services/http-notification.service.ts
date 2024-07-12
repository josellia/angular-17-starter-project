import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpNotificationService {
  private notificationCount = new BehaviorSubject<number>(0);
  constructor(private http: HttpClient) {}

  getNotificationCount(): Observable<number> {
    this.http.get<any>('https://dummyjson.com/products').subscribe({
      next: (data) => {
        console.log(data);
        const totalProduct = data.products.length;
        this.notificationCount.next(totalProduct);
      },
      error: (error) => {
        console.log('There was on error', error);
      },
    });
    return this.notificationCount.asObservable();
  }
}
