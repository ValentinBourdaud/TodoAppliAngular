import  Todo  from "../model/Todo";
import { Injectable } from "@angular/core";
import { ApiServiceService } from "./api-service.service";
import { Observable } from "rxjs";



@Injectable()
export default class TodoServices {
    constructor(private api:ApiServiceService) { }
    getTodos(): Observable<Array<Todo>> {
        return this.api.getTodo();
    }

    addTodo(todo: Todo) {
        this.api.addTodo(todo);
    }

    deleteTodo(todo: Todo) {
        this.api.deleteTodo(todo);
    }

    putTodo(todo:Todo){
        this.api.putTodo(todo);
    }
}