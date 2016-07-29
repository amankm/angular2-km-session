/**
 * Created by aman on 29/7/16.
 */
import {Component} from '@angular/core'
import {TodoModel} from "../model/todo.model";
import {TodoService} from "../service/todo.service";

@Component({
    selector : 'todo-form',
    template : `
            <div class="col-lg-6">
              <form name="createTodo" (submit)="submitTodo()">
                  <div class="panel panel-primary">
                      <div class="panel-heading">
                          <h3 class="panel-title">I need to...</h3>
                      </div>

                      <div class="panel-body">
                          <div class="form-group">
                            <input name="title" [(ngModel)]="todo.title" class="form-control" placeholder="Title">                                                        
                          </div>  
                          <div class="form-group">
                            <input name="description" [(ngModel)]="todo.description" class="form-control" placeholder="Description">
                          </div>
                          <div class="form-group">
                            <select name="priority" [(ngModel)]="todo.priority"class="form-control" placeholder="Select Priority">
                              <option value="Major">Major</option>
                              <option value="Minor">Minor</option>
                              <option value="Blocker">Blocker</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <select name="status" [(ngModel)]="todo.isCompleted" class="form-control" placeholder="Select Priority">
                              <option value="false">Pending</option>
                              <option value="true">Completed</option>
                            </select>
                          </div>
                          <input type="submit" class="btn btn-success" value="Create"/>                        
                      </div>
                  </div>
              </form>
          </div>
    `
})

export class TodoFormComponent {
    todo : TodoModel = new TodoModel();

    constructor(private todoService : TodoService){}

    submitTodo(){
        this.todoService.addTodo(this.todo);
        this.todo = new TodoModel();

    }
}
