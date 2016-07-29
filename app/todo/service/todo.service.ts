/**
 * Created by aman on 29/7/16.
 */
import { Injectable } from '@angular/core'
import {TODOS} from "../../mock-todos";
import {TodoModel} from "../model/todo.model";

@Injectable()
export class TodoService{
    getTodos() {
        return TODOS
    }

    addTodo(todo : TodoModel) {
        TODOS.push(todo);
        console.log("item pushed")
    }
}

