import DS from 'ember-data';

export default DS.Model.extend({
  author:   DS.attr('string'),
  body:     DS.attr('body'),
  comments: DS.hasMany('comment')
  // author:   DS.attr('string'),
  // body:     DS.attr('body'),
  // comments: DS.hasMany('comment')
});
