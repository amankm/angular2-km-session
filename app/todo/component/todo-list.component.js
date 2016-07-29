"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by aman on 29/7/16.
 */
var core_1 = require('@angular/core');
var todo_model_1 = require("../model/todo.model");
var todo_service_1 = require("../service/todo.service");
var TodoListComponent = (function () {
    function TodoListComponent(todoService) {
        this.todoService = todoService;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TodoListComponent.prototype, "todoList", void 0);
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            template: "\n            <div class=\"col-lg-6\">\n                <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading clearfix\">\n                        <h3 class=\"panel-title pull-left\">To-do List</h3>\n                        <input type=\"text\" style=\"width: 300px;\" class=\"form-control pull-right\" placeholder=\"Search\"/>\n                    </div>\n\n                    <div class=\"panel-body\">\n                        <table class=\"table\">                                             \n                                         <tr *ngFor=\"let todo of todoService.getTodos()\">\n                                            <td><input type=\"checkbox\" checked/> </td>\n                                            <td>{{todo.title}}</td>\n                                            <td>{{todo.description}}</td>\n                                            <td>{{todo.priority}}</td>\n                                            <td>{{todo.isCompleted?'Completed':'Pending'}}</td>\n                                            <td>{{todo.dateCreated.toLocaleDateString()}}</td>\n                                            <!--<td><input type=\"checkbox\"  </td>-->\n                                         </tr> \n                        </table>\n                    </div>\n                </div>\n            </div>\n        ",
            directives: [todo_model_1.TodoModel]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map