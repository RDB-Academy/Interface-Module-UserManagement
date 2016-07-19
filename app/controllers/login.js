import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  name: Ember.computed.alias('application.name'),

  rememberMe: true,

  actions: {
    login() {
      var email = this.get('emailAddress');
      var password = this.get('password');
      var rememberMe = this.get('rememberMe');
      console.log(email);
      console.log(password);
      console.log(rememberMe);
    }
  }
});
