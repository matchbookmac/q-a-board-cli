import Ember from 'ember';

export default Ember.Controller.extend({
  viewPost:   true,
  editPost:   false,
  deletePost: false,
  actions: {
    editPost: function () {
      this.set('editPost', true);
      this.set('viewPost', false);
    },
    askDelete: function () {
      this.set('deletePost', true);
      this.set('viewPost', false);
    },
    submitPost: function (post) {
      post.setProperties({
        author:   this.get('model.author'),
        question: this.get('model.question'),
        body:     this.get('model.body'),
      });
      post.save();
      this.set('viewPost', true);
      this.set('editPost', false);
    },
    deletePost: function (post) {
      post.destroyRecord();
      this.set('viewPost', true);
      this.set('deletePost', false);
      this.transitionToRoute('posts');
    }
  }
});
