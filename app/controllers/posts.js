import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitPost: function () {
      var post = this.store.createRecord('post', {
          author: this.get('author'),
        question: this.get('question'),
            body: this.get('body'),
            date: new Date()
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
