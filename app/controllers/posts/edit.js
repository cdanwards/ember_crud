import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    edit: function(){
      var model = this.get('model');
      console.log(model);
      var _this = this;
      Ember.$.ajax({
        url: "https://api.parse.com/1/classes/Post/" + model.objectId,
        type: "PUT",
        data: JSON.stringify(model)
      }).done(function(){
        _this.transitionToRoute('posts');
      });
      return false;
    },
    // cancel: function() {
    //   this.transitionToRoute('posts');
    //
    // }
  }
});
