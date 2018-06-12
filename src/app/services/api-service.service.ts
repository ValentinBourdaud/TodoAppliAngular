import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Todo from '../model/Todo';

const API_BASE_URL: string = 'http://localhost:3000/';
const API_TODO: string = 'todos/';

@Injectable()
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  public getTodo():Observable<Array<Todo>>{
    return <Observable<Array<Todo>>>this.http.get(`${API_BASE_URL}${API_TODO}`);
  }

  public addTodo(todo:Todo){
    return this.http.post(`${API_BASE_URL}${API_TODO}`,todo).subscribe();
  }

  public deleteTodo(todo:Todo){
    return this.http.delete(`${API_BASE_URL}${API_TODO}${todo.id}`).subscribe();
  }

  public putTodo(todo:Todo){
    return this.http.put<Todo>(`${API_BASE_URL}${API_TODO}${todo.id}`,todo).subscribe();
  }
}
