import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ITodo, Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>('/api/todos');
  }

  addNewTodo(payload: ITodo): Observable<Todo> {
    return this.http.post<Todo>('/api/todos', payload);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(`/api/todos/${todo._id}`, todo);
  }

  deleteTodo(id: string): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`/api/todos/${id}`);
  }
}
