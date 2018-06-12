import Todo  from "../model/Todo";

export default class TodoApi {

    private _todos: Array<Todo> = [new Todo('Faire la vaisselle', true),
    new Todo('Envoyer un mail à Olivier', false),
    new Todo('Manger une bonne raclette', true),
    new Todo('Siffler sur la colline', false)];

    constructor(){

    }

    fetchTodos(): Promise<Array<Todo>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this._todos)
            }, 1000);
        });
    }

    addTodo(todo: Todo) {
        this._todos.push(todo);
    }

    deleteTodo(todoDel: Todo) {
        this._todos.splice(this._todos.indexOf(todoDel), 1);
    }
}