import { Injectable } from '@angular/core';
import { IPlace } from './interface.mock';

@Injectable({ providedIn: 'root' })
export class DataMockService {
  constructor() {}
  getPlaces(): IPlace[] {
    return [
      {
        id: 1,
        title: 'Plaza Mayor',
        rating: 9,
        img: 'https://tecolotito.elsiglodetorreon.com.mx/i/2022/02/1527961.jpeg',
        description: 'Prédio comercial com vários restaurantes.',
        favorite: false,
      },
      {
        id: 2,
        title: 'Museu Arocena',
        rating: 8,
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ab/b0/32/museo-arocena.jpg?w=1200&h=1200&s=1',
        description: 'Objetos históricos.',
        favorite: false,
      },
    ];
  }
}
