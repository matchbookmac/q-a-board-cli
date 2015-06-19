import Ember from 'ember';

export default Ember.Controller.extend({
  needs:       ['post'],
  oldestSortProperties: ['date:asc', 'author:asc'],
  oldest: Ember.computed.sort('model', 'oldestSortProperties'),
  newestSortProperties: ['date:desc', 'author:asc'],
  newest: Ember.computed.sort('model', 'newestSortProperties'),
  orderAdded: true,
  oldestFirst: false,
  newestFirst: false,
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
      this.set('viewingPost', true);
      this.transitionToRoute('post', post.id);
    },
    orderAdded: function () {
      this.set('orderAdded', true);
      this.set('oldestFirst', false);
      this.set('newestFirst', false);
    },
    oldestFirst: function () {
      this.set('orderAdded', false);
      this.set('oldestFirst', true);
      this.set('newestFirst', false);
    },
    newestFirst: function () {
      this.set('orderAdded', false);
      this.set('oldestFirst', false);
      this.set('newestFirst', true);
    },
  }
});
