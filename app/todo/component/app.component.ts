import { Component } from '@angular/core';
import { TodoFormComponent } from "./todo-form.component";
import { TodoBannerComponent } from "./todo-banner.component";
import { TodoListComponent } from "./todo-list.component";
import { TodoService } from "../service/todo.service"


@Component({
  selector: 'my-app',
  templateUrl: '../../index.html',
  directives : [TodoBannerComponent, TodoFormComponent, TodoListComponent],
    providers : [TodoService]
})
export class AppComponent{

}

