export default Backbone.View.extend({

  template: JST.taskitem,
  className: 'item',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
  },

});
