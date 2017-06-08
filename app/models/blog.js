import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  category: DS.attr(),
  image: DS.attr()
 });