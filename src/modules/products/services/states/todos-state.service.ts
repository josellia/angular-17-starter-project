import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo.class';
import { Filter } from '../../models/filter.interface';
import { CustomState } from '../../../../core/stores/custom-state.class';
import { CoreApiService } from '../../../../core/core-service/core-api.service';
import { Observable, map, shareReplay } from 'rxjs';

const apiUrl = 'api/todos/';
interface TodoState {
  todos: Todo[];
  selectedTodoId?: number;
  filter: Filter;
}

const initialState: TodoState = {
  todos: [],
  selectedTodoId: undefined,
  filter: {
    search: '',
    category: {
      isBusiness: false,
      isPrivate: false,
    },
  },
};
@Injectable({ providedIn: 'root' })
export class TodosStateService extends CustomState<TodoState> {
  private todosFilterd$: Observable<Todo[]> = this.select((state) => {
    return getTodosFiltered(state.todos, state.filter);
  });

  todosDone$: Observable<Todo[]> = this.todosFilterd$.pipe(
    map((todos) => todos.filter((todo) => todo.isDone))
  );

  todosNotDone$: Observable<Todo[]> = this.todosFilterd$.pipe(
    map((todos) => todos.filter((todo) => !todo.isDone))
  );

  filter$: Observable<Filter> = this.select((state) => state.filter);

  selectedTodo$: Observable<Todo | undefined> = this.select((state) => {
    if (state.selectedTodoId === 0) {
      return new Todo();
    }
    return state.todos.find((item) => item.id === state.selectedTodoId);
  }).pipe(
    // Multicast to prevent multiple executions due to multiple subscribers
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  constructor(private coreApiService: CoreApiService<Todo>) {
    super(initialState);
  }

  selectTodo(todo: Todo) {
    this.setState({ selectedTodoId: todo.id });
  }

  initNewTodo() {
    this.setState({ selectedTodoId: 0 });
  }

  clearSelectedTodo() {
    this.setState({ selectedTodoId: undefined });
  }

  updateFilter(filter: Filter) {
    this.setState({
      filter: {
        ...this.state.filter,
        ...filter,
      },
    });
  }

  load() {
    this.coreApiService.findAll(apiUrl);
  }
}

function getTodosFiltered(todos: Todo[], filter: Filter): Todo[] {
  return todos.filter((item) => {
    return (
      item.title.toUpperCase().indexOf(filter.search.toUpperCase()) > -1 &&
      (filter.category.isBusiness ? item.isBusiness : true) &&
      (filter.category.isPrivate ? item.isPrivate : true)
    );
  });
}
