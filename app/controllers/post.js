import Ember from 'ember';

export default Ember.Controller.extend({
  viewPost:    true,
  viewAnswers: true,
  answerPost:  false,
  editPost:    false,
  deletePost:  false,
  actions: {
    viewPost: function () {
      this.set('viewPost', true);
      this.set('viewAnswers', true);
      this.set('answerPost', false);
      this.set('editPost', false);
      this.set('deletePost', false);
    },
    answerPost: function () {
      this.set('viewPost', true);
      this.set('viewAnswers', true);
      this.set('answerPost', true);
      this.set('editPost', false);
      this.set('deletePost', false);
    },
    editPost: function () {
      this.set('editPost', true);
      this.set('viewAnswers', true);
      this.set('answerPost', false);
      this.set('viewPost', false);
      this.set('deletePost', false);
    },
    askDelete: function () {
      this.set('deletePost', true);
      this.set('viewAnswers', false);
      this.set('answerPost', false);
      this.set('viewPost', false);
      this.set('editPost', false);
    },
    submitEdit: function (post) {
      post.setProperties({
        author:   this.get('model.author'),
        question: this.get('model.question'),
        body:     this.get('model.body'),
      });
      post.save();
      this.set('viewPost', true);
      this.set('answerPost', false);
      this.set('editPost', false);
      this.set('deletePost', false);
    },
    submitAnswer: function (post) {
      var answer = this.store.createRecord('answer', {
        author: this.get('author'),
        answer: this.get('answer'),
        date:   new Date()
      });
      answer.save().then(function () {
        post.get('answers').pushObject(answer);
        post.save();
      });
      this.setProperties({
        author: '',
        answer: ''
      });
      this.set('viewPost', true);
      this.set('answerPost', false);
      this.set('deletePost', false);
      this.set('editPost', false);
    },
    deletePost: function (post) {
      post.destroyRecord();
      this.set('viewPost', true);
      this.set('answerPost', true);
      this.set('deletePost', false);
      this.transitionToRoute('posts');
    }
  }
});
