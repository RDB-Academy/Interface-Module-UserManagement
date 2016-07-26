import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  isOwnSite: Ember.computed('model', 'session', function() {
    var sessionProfile = this.get('session.data.authenticated.profile');
    var profile = this.get('model.profile');

    if(sessionProfile.username === profile.get('username')) {
      return true;
    }
    return false;
  }),

  ownerData: Ember.computed('model', function() {
    var profile = this.get('model.profile');
    var radarData = profile.get('profileRadar');
    radarData.username = profile.get('username');

    return radarData;
  }),

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
