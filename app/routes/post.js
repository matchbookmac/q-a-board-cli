import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('post', params.post_id);
  },
  showPost: function () {
    var controller = this.get('controller')
    controller.set('viewPost', true);
    controller.set('viewAnswers', true);
    controller.set('answerPost', false);
    controller.set('editPost', false);
    controller.set('deletePost', false);
  }.on('deactivate')
});
