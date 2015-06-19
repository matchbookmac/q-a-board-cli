import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitPost: function () {
      var post = this.store.createRecord('post', {
        author: this.get('author'),
        body:   this.get('body')
      });
      post.save();
      this.setProperties({
        author: '',
        body:   ''
      });
      this.transitionToRoute('posts');
    }
  }
});
