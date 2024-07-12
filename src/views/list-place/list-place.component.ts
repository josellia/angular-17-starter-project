import {
  Component,
  OnInit,
  WritableSignal,
  effect,
  signal,
  computed,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  ICategory,
  ICategoryType,
  IPlace,
} from '../../services/mock/interface.mock';
import { DataMockService } from '../../services/mock/data-mock.service';

@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.scss'],
  standalone: true,
  providers: [],
})
export class ListPlaceComponent implements OnInit {
  constructor(private dataMockService: DataMockService) {
    effect(() => {
      localStorage.setItem('places', JSON.stringify(this.places()));
    });
  }
  places: WritableSignal<IPlace[]> = signal<IPlace[]>(
    this.dataMockService.getPlaces()
  );

  categorySignal: WritableSignal<ICategoryType> = signal<any>('all');

  categories: any[] = [
    {
      name: 'Todas',
      type: 'all',
    },
    {
      name: 'Favoritas',
      type: 'favorites',
    },
  ] as any;

  placesFiltered = computed(() => {
    if (this.categorySignal() === 'favorites') {
      return this.places().filter((place) => place.favorite);
    }
    return this.places();
  });

  ngOnInit() {
    const storage = localStorage.getItem('places');
    if (storage) {
      this.places.set(JSON.parse(storage));
    }
  }

  changeCategory(categoryType: any) {
    this.categorySignal.set(categoryType);
  }
  addFavorite(placeId: number) {
    this.places.update((prevPlaces) =>
      prevPlaces.map((p) =>
        p.id === placeId ? { ...p, favorite: !p.favorite } : p
      )
    );
  }
}
