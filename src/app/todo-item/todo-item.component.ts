import { Component, OnInit } from '@angular/core';
import Todo from "../model/Todo";
import { Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:Todo;

  constructor() { }

  ngOnInit() {
  
  }
  barTitle() {
    this.todo.isDone = !this.todo.isDone;
  }

}
