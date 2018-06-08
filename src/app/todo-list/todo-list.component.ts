import { Component, OnInit } from '@angular/core';
import Todo from "../model/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  listeTodo:Array<Todo> = [];

  constructor() { }

  ngOnInit() {
    this.listeTodo = [
      new Todo('Faire la vaisselle', true),
      new Todo('Envoyer un mail à Olivier', false),
      new Todo('Manger une bonne raclette', true),
      new Todo('Siffler sur la colline', false)
      ]
  }

}
