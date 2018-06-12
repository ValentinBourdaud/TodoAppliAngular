import  Todo  from "../model/Todo";
import TodoApi from "./TodoApi";
import { Injectable } from "@angular/core";
import { ApiService } from "./api-service.service";

@Injectable()
export default class TodoServices {

    constructor(private todoApi: TodoApi, private apiservice : ApiService) { }
    getTodos(): Promise<Array<Todo>> {       
        return this.todoApi.fetchTodos();
    }

    addTodo(todo: Todo) {
        this.apiservice.createTodo(todo).subscribe();
    }

    deleteTodo(todo: Todo) {
        this.apiservice.deleteTodoById(todo).subscribe();
    }

    majTodo(todo:Todo){
        this.apiservice.updateTodoById(todo).subscribe();
    }
}