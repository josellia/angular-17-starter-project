import { Injectable, computed, signal } from '@angular/core';

interface State {
  // data: Array<{ title: string; completed: boolean }>;
  data: any;
  loaded: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loaded: false,
  loading: false,
  error: null,
};
@Injectable({ providedIn: 'root' })
export class DataService {
  state = signal(initialState);

  data = computed(() => this.state().data);
  loading = computed(() => this.state().loading);
  loaded = computed(() => this.state().loaded);
  error = computed(() => this.state().error);

  loadUsers() {
    this.state.set({ data: [], loading: true, loaded: false, error: null });

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        // console.log(response);
        response.json();
      })
      .catch((err) => {
        this.state.set({
          data: [],
          loading: false,
          loaded: true,
          error: err.message,
        });
      })
      .then((data) => {
        this.state.set({
          data,
          loading: false,
          loaded: true,
          error: null,
        });
      });
  }
}
// https://jsonplaceholder.typicode.com/todos
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// },
