export default class Todo {
    id: number;
    constructor(public title: string, public isDone: boolean) {
        this.title = title;
        this.isDone = isDone;
    }
}