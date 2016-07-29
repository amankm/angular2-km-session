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
var TodoFormComponent = (function () {
    function TodoFormComponent(todoService) {
        this.todoService = todoService;
        this.todo = new todo_model_1.TodoModel();
    }
    TodoFormComponent.prototype.submitTodo = function () {
        this.todoService.addTodo(this.todo);
        this.todo = new todo_model_1.TodoModel();
    };
    TodoFormComponent = __decorate([
        core_1.Component({
            selector: 'todo-form',
            template: "\n            <div class=\"col-lg-6\">\n              <form name=\"createTodo\" (submit)=\"submitTodo()\">\n                  <div class=\"panel panel-primary\">\n                      <div class=\"panel-heading\">\n                          <h3 class=\"panel-title\">I need to...</h3>\n                      </div>\n\n                      <div class=\"panel-body\">\n                          <div class=\"form-group\">\n                            <input name=\"title\" [(ngModel)]=\"todo.title\" class=\"form-control\" placeholder=\"Title\">                                                        \n                          </div>  \n                          <div class=\"form-group\">\n                            <input name=\"description\" [(ngModel)]=\"todo.description\" class=\"form-control\" placeholder=\"Description\">\n                          </div>\n                          <div class=\"form-group\">\n                            <select name=\"priority\" [(ngModel)]=\"todo.priority\"class=\"form-control\" placeholder=\"Select Priority\">\n                              <option value=\"Major\">Major</option>\n                              <option value=\"Minor\">Minor</option>\n                              <option value=\"Blocker\">Blocker</option>\n                            </select>\n                          </div>\n                          <div class=\"form-group\">\n                            <select name=\"status\" [(ngModel)]=\"todo.isCompleted\" class=\"form-control\" placeholder=\"Select Priority\">\n                              <option value=\"false\">Pending</option>\n                              <option value=\"true\">Completed</option>\n                            </select>\n                          </div>\n                          <input type=\"submit\" class=\"btn btn-success\" value=\"Create\"/>                        \n                      </div>\n                  </div>\n              </form>\n          </div>\n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoFormComponent);
    return TodoFormComponent;
}());
exports.TodoFormComponent = TodoFormComponent;
//# sourceMappingURL=todo-form.component.js.map