import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  profile: Ember.computed('session.data.authenticated.profile', function() {
    return this.get('session.data.authenticated.profile');
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
