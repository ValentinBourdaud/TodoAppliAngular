import  Todo  from "../model/Todo";
import TodoApi from "./TodoApi";
import { Injectable } from "@angular/core";

@Injectable()
export default class TodoServices {

    constructor(private todoApi: TodoApi) { }
    getTodos(): Promise<Array<Todo>> {       
        return this.todoApi.fetchTodos();
    }

    addTodo(todo: Todo) {
        this.todoApi.addTodo(todo);
    }

    deleteTodo(todo: Todo) {
        this.todoApi.deleteTodo(todo);
    }
}