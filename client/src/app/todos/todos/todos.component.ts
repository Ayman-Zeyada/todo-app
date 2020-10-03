import { Component, OnInit } from '@angular/core';
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
  todos: Array<Todo> = [];
  todoToBeEdited: TodoToBeEdited;
  today = new Date();
  title = new FormControl('', Validators.required);
  modalId = 'addEditTodoModal';
  private editing: boolean;

  constructor(
    private todoService: TodoService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.editing = false;
    this.todoService.getAllTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  openModal(editing: boolean): void {
    this.editing = editing;
    this.modalService.open(this.modalId);
  }

  closeModal(id: string): void {
    this.title.setValue('');
    this.editing = false;
    this.modalService.close(id);
  }

  addTodo(): void {
    if (this.title.valid) {
      this.todoService
        .addNewTodo({ title: this.title.value, isDone: false })
        .subscribe((newTodo) => {
          this.todos.push(newTodo);
          this.closeModal(this.modalId);
        });
    }
  }

  onEdit(todo: Todo, index: number): void {
    this.todoToBeEdited = new TodoToBeEdited(todo, index);
    this.openModal(true);
    this.title.setValue(this.todoToBeEdited.todo.title);
  }

  deleteTodo(todo: Todo, index: number): void {
    this.todoService.deleteTodo(todo._id).subscribe(res => {
      if (res.success) {
        this.todos.splice(index, 1);
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
        this.closeModal(this.modalId);
      });
    }
  }
}
