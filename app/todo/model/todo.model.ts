import { Component } from '@angular/core';

@Component({
    selector : 'to-do',
    template : `
        <h1>{{title}}</h1>
        <h2>{{description}}</h2>
        <div> dateCreated : {{dateCreated}}</div>
        <div> status : {{isCompleted}}</div>
        
    ` 
})

export class TodoModel {
    constructor(public title:string = "", public description :string = "", public priority:string = "Minor",
                public dateCreated:Date = new Date(), public isCompleted:boolean=false){}

}