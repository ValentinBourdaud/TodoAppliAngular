import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import Todo from '../model/Todo';

const API_BASE_URL: string = 'http://localhost:3000/';
const API_TODOS: string = 'todos';

@Injectable({
  providedIn: 'root',
 
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getTodos():Observable <Array<Todo>> {
    return <Observable <Array<Todo>>> this.http.get(`${API_BASE_URL}${API_TODOS}`);
    }

  /*getTodoById(id : number){
    return this.http.get(`${API_BASE_URL}${API_TODOS}/${id}`);
  }*/

  createTodo(todo:Todo):Observable<Todo>{
    return <Observable<Todo>> this.http.post(`${API_BASE_URL}${API_TODOS}`, todo);
  }

  deleteTodoById(todo :Todo){
    return this.http.delete(`${API_BASE_URL}${API_TODOS}/${todo.id}`);
  }

  updateTodoById(todo :Todo){
    return this.http.put<Todo>(`${API_BASE_URL}${API_TODOS}/${todo.id}`, todo);
  }

}
