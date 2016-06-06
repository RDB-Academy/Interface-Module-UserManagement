import Ember from 'ember';

var isLoggedIn = true;

export default Ember.Route.extend({
  model() {
    return {
      applications: this.store.findAll('module-application'),
      features: this.store.findAll('feature'),
      isLoggedIn: isLoggedIn
    };
  }
});
