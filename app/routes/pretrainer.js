import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      achievements: this.store.findAll('achievement')
    }
  }
});
