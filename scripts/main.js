import TaskView from './views/taskView';
import TaskListView from './views/taskListView';
import {ToDo, ToDoCollection} from './models/taskList';

(function(){
  'use strict';

  $(document).ready(function(){
    Backbone.history.start();

    var list = new ToDoCollection();

    list.fetch().then(function(){
      var toDo = new TaskListView({
        collection: list
      });
      $('#main').html(toDo.el);
    }

    .bind(this), console.error.bind(console));

  });
})();
