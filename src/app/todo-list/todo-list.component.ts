import { Component, OnInit } from '@angular/core';
import Todo from "../model/Todo";
import TodoServices from '../services/TodoServices';
import { ApiService } from '../services/api-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [
    ApiService
  ]
})
export class TodoListComponent implements OnInit {

   _todos: Observable<Array<Todo>>;

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this._todos = this.apiservice.getTodos();
  }

}
