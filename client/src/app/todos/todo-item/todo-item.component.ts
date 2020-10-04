import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter();
  @Output() editTodo = new EventEmitter();
  actionsOpened = false;
  title: FormControl;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.title = new FormControl(this.todo.title, Validators.required);
  }

  openActions(): void {
    this.actionsOpened = !this.actionsOpened;
  }

  onClickOutside(): void {
    this.actionsOpened = false;
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Tab' && !this.actionsOpened) {
      event.preventDefault();
      this.openActions();
    }
  }

  toggleDone(status: boolean): void {
    const todo = new Todo(this.todo);
    todo.isDone = status;
    this.todoService.updateTodo(todo).subscribe(updatedTodo => {
      this.todo = updatedTodo;
    });
  }

  edit(): void {
    this.editTodo.emit();
  }

  delete(): void {
    this.deleteTodo.emit();
  }
}
