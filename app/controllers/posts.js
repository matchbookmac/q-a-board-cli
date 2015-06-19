import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitPost: function () {
      var id = (posts.length + 1).toString();
      posts.addObject({
              id: id,
          author: this.get('author'),
            body: this.get('body'),
        comments: []
      });

      // var post = this.store.createRecord('post', {
      //   author: this.get('author'),
      //   body:   this.get('body')
      // });
      // post.save();
      this.setProperties({
        author: '',
        body:   ''
      });
      this.transitionToRoute('posts');
    }
  }
});
