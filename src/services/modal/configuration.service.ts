import { Injectable, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ComponentConfig } from '../../interfaces/component-config.model';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  private $loadComponent: Subject<ComponentConfig> =
    new Subject<ComponentConfig>();
  private $destroyComponent: Subject<void> = new Subject();

  loadComponent$: Observable<ComponentConfig> =
    this.$loadComponent.asObservable();
  destroyComponent$: Observable<void> = this.$destroyComponent.asObservable();

  constructor() {}
  dispatachComponent(config: ComponentConfig): void {
    console.log(config);
    this.$loadComponent.next(config);
  }

  destroyComponent() {
    this.$destroyComponent.next();
  }
}
