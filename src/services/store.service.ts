import { Injectable, Signal, computed, signal } from '@angular/core';

export class StoreService<T> {
  readonly state = signal({} as T);

  select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this.state()[key]);
  }
  set<K extends keyof T>(key: K, data: T[K]) {
    this.state.update((currentValue) => ({ ...currentValue, [key]: data }));
  }

  setState(partialState: Partial<T>): void {
    this.state.update((currentValue) => ({ ...currentValue, ...partialState }));
  }
}
