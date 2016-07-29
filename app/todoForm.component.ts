/**
 * Created by aman on 29/7/16.
 */
import {Component} from '@angular/core'

@Component({
    selector : 'todo-form',
    template : `
            <div class="col-lg-6">
              <form name="createTodo">
                  <div class="panel panel-primary">
                      <div class="panel-heading">
                          <h3 class="panel-title">I need to...</h3>
                      </div>

                      <div class="panel-body">
                          <div class="form-group">
                            <input name="task" class="form-control" placeholder="Title">                                                        
                          </div>  
                          <div class="form-group">
                            <input name="description" class="form-control" placeholder="Description">
                          </div>
                          <div class="form-group">
                            <select name="priority" class="form-control" placeholder="Select Priority">
                              <option>Major</option>
                              <option>Minor</option>
                              <option>Blocker</option>
                            </select>
                          </div>
                          <input type="submit" class="btn btn-success" value="Create"/>                        
                      </div>
                  </div>
              </form>
          </div>
    `
})

export class TodoFormComponent {}
