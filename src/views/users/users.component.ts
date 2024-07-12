import { Component, OnInit, computed, inject } from '@angular/core';
import { CustomListComponent } from '../../shared/components/custom-list/custom-list.component';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { RecursionListComponent } from '../../shared/components/recursion-list/recursion-list.component';
import { UsersService } from '../../services/users.service';
import { MotorcycleService } from '../../services/motorcycle.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { MotorcycleListComponent } from '../motorcycle-list/motorcycle-list.component';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,
  imports: [
    CustomListComponent,
    CommonModule,
    RecursionListComponent,
    BadgeComponent,
    MotorcycleListComponent,
  ],
})
export class UsersComponent implements OnInit {
  dataService = inject(DataService);
  usersService = inject(UsersService);
  fruits = ['apple', 'kiwi', 'pear', 'strawberry'];
  peoples = [
    {
      name: 'lulu',
    },
    {
      name: 'luli',
    },
  ];
  data: any;
  users = this.usersService.users;
  hasUsers = computed(() => this.users().length > 0);
  loading$ = this.loader.isLoading$;

  motocyclesFromState = this.motorCycleService.state.asReadonly();

  constructor(private motorCycleService: MotorcycleService, private loader: LoaderService) {}
  ngOnInit() {}
}
