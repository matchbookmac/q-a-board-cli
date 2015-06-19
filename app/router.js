import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.resource('posts', { path: 'posts' }, function () {
    this.route('new-post');
    this.resource('post', { path: ':post_id' });
  });
});

export default Router;
