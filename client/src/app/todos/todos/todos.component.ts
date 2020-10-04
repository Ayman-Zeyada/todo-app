import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Todo, TodoToBeEdited } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import { SnackbarType } from 'src/app/shared/enumes/snackbar-type.enum';

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
    private modalService: ModalService,
    private snackbarService: SnackbarService,
    public translate: TranslateService
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

  closeModal(id: string, resetTitleControl?: boolean): void {
    this.modalService.close(id);
    if (resetTitleControl) {
      this.initTitleControl();
    }
  }

  addTodo(): void {
    if (this.title.valid) {
      this.closeModal(this.addEditTodoModalId);
      this.todoService
        .addNewTodo({ title: this.title.value, isDone: false })
        .subscribe((newTodo) => {
          this.todos.push(newTodo);
          this.snackbarService.show(this.translate.instant('TODOS.ADDED_SUCCESS'),  SnackbarType.SUCCESS);
          this.initTitleControl();
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
    this.closeModal(this.confirmationModalId);
    this.todoService.deleteTodo(this.todoToBeEdited.todo._id).subscribe(res => {
      if (res.success) {
        this.todos.splice(this.todoToBeEdited.index, 1);
        this.todoToBeEdited = null;
        this.snackbarService.show(this.translate.instant('TODOS.DELETED_SUCCESS'), SnackbarType.SUCCESS);
        this.initTitleControl();
      }
    });
  }

  invokeAction(): void {
    this.closeModal(this.addEditTodoModalId);
    if (!this.editing) {
      this.addTodo();
    } else {
      this.todoToBeEdited.todo.title = this.title.value;
      this.todoService.updateTodo(this.todoToBeEdited.todo).subscribe(updatedTodo => {
        console.log(updatedTodo);
        this.todos[this.todoToBeEdited.index] = updatedTodo;
        this.todoToBeEdited = null;
        this.editing = false;
        this.snackbarService.show(this.translate.instant('TODOS.UPDATED_SUCCESS'), SnackbarType.SUCCESS);
        this.initTitleControl();
      });
    }
  }
}
