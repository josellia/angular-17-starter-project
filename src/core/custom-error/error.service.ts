import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  errors = signal<string[]>([]);

  add(errMsg: string) {
    this.errors.update((list) => [...list, errMsg]);
  }

  clear(errMsg: any) {
    this.errors.update((list) => list.filter((e) => e !== errMsg));
  }

  clearAll() {
    this.errors.set([]);
  }
}
