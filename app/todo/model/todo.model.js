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
var core_1 = require('@angular/core');
var TodoModel = (function () {
    function TodoModel(title, description, priority, dateCreated, isCompleted) {
        if (title === void 0) { title = ""; }
        if (description === void 0) { description = ""; }
        if (priority === void 0) { priority = "Minor"; }
        if (dateCreated === void 0) { dateCreated = new Date(); }
        if (isCompleted === void 0) { isCompleted = false; }
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dateCreated = dateCreated;
        this.isCompleted = isCompleted;
    }
    TodoModel = __decorate([
        core_1.Component({
            selector: 'to-do',
            template: "\n        <h1>{{title}}</h1>\n        <h2>{{description}}</h2>\n        <div> dateCreated : {{dateCreated}}</div>\n        <div> status : {{isCompleted}}</div>\n        \n    "
        }), 
        __metadata('design:paramtypes', [String, String, String, Date, Boolean])
    ], TodoModel);
    return TodoModel;
}());
exports.TodoModel = TodoModel;
//# sourceMappingURL=todo.model.js.map