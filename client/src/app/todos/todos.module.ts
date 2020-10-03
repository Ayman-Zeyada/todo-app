import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodosComponent, TodoItemComponent],
  imports: [
    CommonModule,
    NgScrollbarModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
