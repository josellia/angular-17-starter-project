import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DefaultHttpErrorService } from '../core/custom-error/default-http-error.service';
import { User } from '../core/models/user';
import { catchError, map, shareReplay } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  private http = inject(HttpClient);
  private httpErrorService = inject(DefaultHttpErrorService);

  private users$ = this.http.get<User>(this.url).pipe(
    map((data) => {
      return data;
    }),
    shareReplay(1),
    catchError((e) => {
      this.httpErrorService.handle(e);
      return [];
    })
  ) as any;

  users = toSignal<User[], User[]>(this.users$, {
    initialValue: [],
  });
}
