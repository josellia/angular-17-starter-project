import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { MotorCycle } from '../core/models/motorcycle';

@Injectable({ providedIn: 'root' })
export class MotorcycleService extends StoreService<MotorCycle[]> {
  constructor() {
    super();
  }
}
