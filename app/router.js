import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', { path: '/' }, function () {
    this.route('new-post');
    this.resource('post', { path: 'posts/:post_id' });
  });
});

export default Router;
