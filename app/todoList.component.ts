/**
 * Created by aman on 29/7/16.
 */
import {Component} from '@angular/core'
import {TodoComponent} from "./todo.component";

const TODOS : TodoComponent[] = [

];
@Component({
    selector : 'todo-list',
    template : `
            <div *ngIf="todoList && todoList.length > 0" class="col-lg-6">
                <div class="panel panel-primary">
                    <div class="panel-heading clearfix">
                        <h3 class="panel-title pull-left">To-do List</h3>
                        <input type="text" style="width: 300px;" class="form-control pull-right" placeholder="Search"/>
                    </div>

                    <div class="panel-body">
                        <table class="table">                                             
                                         <tr *ngFor="let todo of todoList">
                                            <td><input type="checkbox" [checked]="{{todo.isCompleted?'checked':''}}"/> </td>
                                            <td>{{todo.title}}</td>
                                            <td>{{todo.description}}</td>
                                            <td>{{todo.isCompleted?'Completed':'Pending'}}</td>
                                            <td>{{todo.dateCreated.toLocaleDateString()}}</td>
                                            <!--<td><input type="checkbox"  </td>-->
                                         </tr> 
                        </table>
                    </div>
                </div>
            </div>
        `,
    directives : [TodoComponent]
})

export class TodoListComponent{
    todoList = TODOS
}


