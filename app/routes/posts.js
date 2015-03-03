import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    destroyPost: function(post){
      var id = post.objectId;
      Ember.$.ajax("https://api.parse.com/1/classes/Post/" + id, {
        type: 'DELETE',

      });
      // this.modelFor('posts').removeObject(post);
    }


  },

  model: function() {
    return Ember.$.ajax("https://api.parse.com/1/classes/Post").then(function(response) {
            return response.results;
    });
  }
});
