import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('post');
  },
  showForm: function () {
    this.get('controller').set('viewPost', true);
  }.on('deactivate')
});
