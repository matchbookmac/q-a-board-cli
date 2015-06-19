import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('post', params.post_id);
  },
  showPost: function () {
    this.get('controller').set('viewPost', true);
  }.on('deactivate')
});
