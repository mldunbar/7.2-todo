var ToDo = Backbone.Model.extend({
  defaults: {
    'id' : '',
    'task' : '',
    // 'created_at': ''
  },

});

var ToDoCollection = Backbone.Collection.extend({
  model: ToDo,
  url: 'todo.JSON'
});

console.log('go for launch');

export default {ToDo, ToDoCollection};
