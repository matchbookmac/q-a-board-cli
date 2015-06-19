import DS from 'ember-data';

export default DS.Model.extend({
  author:   DS.attr('string'),
  question: DS.attr('string'),
  body:     DS.attr('string'),
  date:     DS.attr('date'),
  comments: DS.hasMany('comment')
});
