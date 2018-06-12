import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import TodoApi from './services/TodoApi';
import {FormsModule} from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api-service.service';
import { HttpClient } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoApi,
    ApiService,
    {provide : HTTP_INTERCEPTORS, useClass : InterceptorService, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
