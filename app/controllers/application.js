import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  user: Ember.computed('session.data.authenticated.user', function() {
    return this.get('session.data.authenticated.user');
  }),


  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
