export default class Todo{
    private _title: string;
    private _isDone: boolean;

    constructor(title : string, isDone : boolean){
        this._title = title;
        this._isDone = isDone;
    }

    get title(): string {
        return this._title;
    }

    get isDone(): boolean {
        return this._isDone;
    }

    set isDone(isDone :boolean){
        this._isDone=isDone;
    } 
}