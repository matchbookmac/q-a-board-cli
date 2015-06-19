import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  answer: DS.attr('string'),
  date:   DS.attr('date'),
  post:   DS.belongsTo('post', { async: true })
});
