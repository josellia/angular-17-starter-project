import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Component, importProvidersFrom, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './views/users/users.component';
import { MotorcycleListComponent } from './views/motorcycle-list/motorcycle-list.component';
import { LoaderIterceptor } from './core/interceptors/loader-iterceptor.service';
import { ListPlaceComponent } from './views/list-place/list-place.component';
import { RenderComponentsComponent } from './views/render-components/render-components.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    UsersComponent,
    ListPlaceComponent,
    RenderComponentsComponent,
  ],
  template: `
  <!-- <app-users/> -->
  <h3 class="root-title">Lugares para visitar antes de bater as botas</h3>
  <div>
  <app-list-place></app-list-place><br>
</div>

 <app-render-components></app-render-components>
  `,
})
export class App {
  name = 'Angular';
  constructor() {}
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(HttpClientModule),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderIterceptor,
      multi: true,
    },
  ],
});
