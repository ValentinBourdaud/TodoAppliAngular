import { Component, OnInit } from '@angular/core';
import Todo from '../model/Todo';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  providers : [
    ApiServiceService
  ]
})

export class TodoFormComponent implements OnInit {
  todo:Todo;
  constructor(private api:ApiServiceService) { }

  handleClick() {
    this.api.addTodo(new Todo(this.todo.title, this.todo.isDone));
  }

  ngOnInit() {
    this.todo=new Todo("", false);
  }

}
