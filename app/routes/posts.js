import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('post');
  },
  showForm: function () {
    this.get('controller').set('viewingPost', true);
  }.on('deactivate'),
  actions: {
    didTransition: function() {
      var postController = this.controllerFor('post');
      postController.set('viewPost', true);
      postController.set('viewAnswers', true);
      postController.set('answerPost', false);
      postController.set('editPost', false);
      postController.set('deletePost', false);
    }
  }
});
