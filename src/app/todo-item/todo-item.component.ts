import { Component, OnInit } from '@angular/core';
import Todo from "../model/Todo";
import { Input } from '@angular/core';
import TodoServices from '../services/TodoServices';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:Todo;

  constructor(private todoservice:TodoServices) { }

  ngOnInit() {
  
  }
  barTitle() {
    this.todo.isDone = !this.todo.isDone;
  }

  deleteTodo(todo:Todo){
    this.todoservice.deleteTodo(todo);
  }

}
