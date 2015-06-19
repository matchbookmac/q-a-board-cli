import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  body:   DS.attr('body'),
  post:   DS.belongsTo('post')
});
