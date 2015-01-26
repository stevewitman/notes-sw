import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('note');
    return this.store.find('title');
  }
});
