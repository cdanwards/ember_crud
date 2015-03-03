import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy: function() {
      this.send('destroyPost', this.get('model'));
    },
    edit: function() {
      this.send('editPost', this.get('model'));
    }
  }
});
