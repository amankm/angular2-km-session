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

export class TodoComponent {
    id : number;
    title : string;
    description : string;
    dateCreated : Date = new Date();
    isCompleted : boolean = false;

}