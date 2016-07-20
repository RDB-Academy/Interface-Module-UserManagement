import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  emailAddress: "",
  password: "",

  actions: {
    login() {
      var email = this.get('emailAddress');
      var password = this.get('password');

      this.get('session').authenticate('authenticator:default', email, password).catch((reason) => {
        console.log(reason);
      });

      console.log(this.get('session.data'));

      console.log(email);
      console.log(password);
    }
  }
});
