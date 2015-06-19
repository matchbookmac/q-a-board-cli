import Ember from 'ember';

export default Ember.Controller.extend({
  viewingPost: false,
  actions: {
    viewPost: function (post) {
      this.set('viewingPost', true);
      this.transitionToRoute('post', post);
    },
    hidePost: function () {
      this.set('viewingPost', false);
    },
    submitPost: function () {
      var post =  this.store.createRecord('post', {
        author:   this.get('author'),
        question: this.get('question'),
        body:     this.get('body'),
        date:     new Date()
      });
      post.save();
      this.setProperties({
        author: '',
        question: '',
        body: ''
      });
      this.transitionToRoute('posts');
    }
  }
});
