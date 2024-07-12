export interface IPlace {
  id: number;
  title: string;
  rating: number;
  img: string;
  description: string;
  favorite: boolean;
}

export type ICategoryType = 'all' | 'favorites';

export interface ICategory {
  name: string;
  type: ICategory;
}
