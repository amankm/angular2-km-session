/**
 * Created by aman on 29/7/16.
 */
import {Component, Input} from '@angular/core'
import {TodoModel} from "../model/todo.model";
import {TodoService} from "../service/todo.service";



@Component({
    selector : 'todo-list',
    template : `
            <div class="col-lg-6">
                <div class="panel panel-primary">
                    <div class="panel-heading clearfix">
                        <h3 class="panel-title pull-left">To-do List</h3>
                        <input type="text" style="width: 300px;" class="form-control pull-right" placeholder="Search"/>
                    </div>

                    <div class="panel-body">
                        <table class="table">                                             
                                         <tr *ngFor="let todo of todoService.getTodos()">
                                            <td><input type="checkbox" checked/> </td>
                                            <td>{{todo.title}}</td>
                                            <td>{{todo.description}}</td>
                                            <td>{{todo.priority}}</td>
                                            <td>{{todo.isCompleted?'Completed':'Pending'}}</td>
                                            <td>{{todo.dateCreated.toLocaleDateString()}}</td>
                                            <!--<td><input type="checkbox"  </td>-->
                                         </tr> 
                        </table>
                    </div>
                </div>
            </div>
        `,
    directives : [TodoModel]
})

export class TodoListComponent{
    @Input()
    todoList : TodoModel[];
    constructor(private todoService : TodoService) {}
}


