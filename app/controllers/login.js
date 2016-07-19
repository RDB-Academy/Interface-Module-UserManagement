import Ember from 'ember';

export default Ember.Controller.extend({
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
