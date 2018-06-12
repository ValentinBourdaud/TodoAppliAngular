import { Component, OnInit } from '@angular/core';
import Todo from "../model/Todo";
import TodoServices from '../services/TodoServices';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [
    TodoServices
  ]
})
export class TodoListComponent implements OnInit {

   _todos: Observable<Array<Todo>>;

  constructor(private api: ApiServiceService) { }

  

  ngOnInit() {
    this._todos=this.api.getTodo();
    //this.todoService.getTodos().then(value => this._todos = value);
  }

}
