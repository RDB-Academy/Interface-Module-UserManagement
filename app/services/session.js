import Ember from 'ember';

export default Ember.Service.extend({
  currentSession: null,
  devMode: true,

  init() {
    var cookie = Cookies.get("session");
    if(cookie === undefined) {
      this.set('currentSession', null);
      return;
    }

    this.set('currentSession', cookie);
    // validate session !!
  }
});
