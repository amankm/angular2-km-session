import { Component } from '@angular/core';
import {TodoFormComponent} from "./todoForm.component";
import {TodoBannerComponent} from "./TodoBanner.component";
import {TodoListComponent} from "./todoList.component";


@Component({
  selector: 'my-app',
  templateUrl: 'index.html',
  directives : [TodoBannerComponent, TodoFormComponent, TodoListComponent]
})
export class AppComponent { }
