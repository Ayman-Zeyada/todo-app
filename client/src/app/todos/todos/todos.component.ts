import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Todo, TodoToBeEdited } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @ViewChild('titleInput') titleInput: ElementRef;
  todos: Array<Todo> = [];
  todoToBeEdited: TodoToBeEdited;
  today = new Date();
  title: FormControl;
  addEditTodoModalId = 'addEditTodoModalId';
  confirmationModalId = 'confirmationModalId';
  private editing: boolean;

  constructor(
    private todoService: TodoService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.initTitleControl();
    this.editing = false;
    this.todoService.getAllTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  initTitleControl(): void {
    this.title = new FormControl('', Validators.required);
  }

  openModal(editing: boolean): void {
    setTimeout(() => {
      this.titleInput.nativeElement.focus();
    }, 100);
    this.editing = editing;
    this.modalService.open(this.addEditTodoModalId);
  }

  closeModal(id: string): void {
    this.initTitleControl();
    this.editing = false;
    this.modalService.close(id);
  }

  addTodo(): void {
    if (this.title.valid) {
      this.todoService
        .addNewTodo({ title: this.title.value, isDone: false })
        .subscribe((newTodo) => {
          this.todos.push(newTodo);
          this.closeModal(this.addEditTodoModalId);
        });
    }
  }

  onEdit(todo: Todo, index: number): void {
    this.todoToBeEdited = new TodoToBeEdited(todo, index);
    this.openModal(true);
    this.title.setValue(this.todoToBeEdited.todo.title);
  }

  onDelete(todo: Todo, index: number): void {
    this.todoToBeEdited = new TodoToBeEdited(todo, index);
    this.modalService.open(this.confirmationModalId);
  }

  deleteTodo(): void {
    this.todoService.deleteTodo(this.todoToBeEdited.todo._id).subscribe(res => {
      if (res.success) {
        this.todos.splice(this.todoToBeEdited.index, 1);
        this.todoToBeEdited = null;
        this.closeModal(this.confirmationModalId);
      }
    });
  }

  invokeAction(): void {
    if (!this.editing) {
      this.addTodo();
    } else {
      this.todoToBeEdited.todo.title = this.title.value;
      this.todoService.updateTodo(this.todoToBeEdited.todo).subscribe(updatedTodo => {
        this.todos[this.todoToBeEdited.index] = updatedTodo;
        this.todoToBeEdited = null;
        this.closeModal(this.addEditTodoModalId);
      });
    }
  }
}
