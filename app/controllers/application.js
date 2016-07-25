import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  user: Ember.computed('session.data.authenticated.user', function() {
    return this.get('session.data.authenticated.user');
  }),

  navbarBrandTarget: Ember.computed('session.isAuthenticated', function() {
    var isAuthenticated = this.get('session.isAuthenticated');
    return (isAuthenticated) ? 'home' : 'index';
  }),


  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
