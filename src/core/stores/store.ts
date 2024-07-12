import { BehaviorSubject } from 'rxjs';

export abstract class Store<T> {
  private state$!: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  getAll = (): T => this.state$.getValue();
}
