import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { TodoItemComponent } from './todo-item/todo-item.component';
import { SharedModule } from '../shared/shared.module';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  declarations: [TodoItemComponent, TodosListComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    NgScrollbarModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TodosModule { }
