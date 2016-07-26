import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  isFriend: Ember.computed('model', 'session', function() {
    var sessionProfile = this.get('session.data.authenticated.profile');
    var profile = this.get('model.profile');

    if(sessionProfile.username === profile.get('username')) {
      return true;
    }

    // ToDo
    // If Page Owner is a Friend also true !!!

    return false;
  })
});
