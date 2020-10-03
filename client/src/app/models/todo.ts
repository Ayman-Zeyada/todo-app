export interface ITodo {
  title: string;
  isDone: boolean;
}

export class Todo implements ITodo {
  // tslint:disable-next-line: variable-name
  _id: string;
  title: string;
  isDone: boolean;

  constructor(initializer: any) {
    this._id = initializer._id;
    this.title = initializer.title;
    this.isDone = initializer.isDone;
  }
}

export class TodoToBeEdited {
  constructor(public todo: Todo, public index: number) {}
}