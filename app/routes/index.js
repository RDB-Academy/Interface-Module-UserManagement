import Ember from 'ember';

var isLoggedIn = true;

export default Ember.Route.extend({
  model() {
    return isLoggedIn;
  }
});
