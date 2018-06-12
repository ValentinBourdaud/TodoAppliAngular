import Todo  from "../model/Todo";
import {ApiServiceService} from './api-service.service'
export default class TodoApi {
    private _todos:Array<Todo>;

    fetchTodos(): Promise<Array<Todo>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this._todos)
            }, 1000);
        });
    }
    addTodo(todo: Todo) {
        this._todos = [...this._todos,todo];

    }

    deleteTodo(todoDel: Todo) {
        this._todos.splice(this._todos.indexOf(todoDel), 1);
    }
}