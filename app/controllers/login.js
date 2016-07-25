import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  emailAddress: "max.musterman@mail.de",
  password: "password",

  isInvalid: false,

  actions: {
    submit() {
      var email = this.get('emailAddress');
      var password = this.get('password');

      if(!(Ember.isEmpty(email) || Ember.isEmpty(email))) {
        this.get('session').authenticate('authenticator:default', email, password).catch((reason) => {
          console.log(reason);
        });
      } else {
        this.set('isInvalid', "invalid");
      }
      Ember.run.debounce(this, this.resetInvalidStatus, 500);
    }
  },

  resetInvalidStatus: function() {
    this.set('isInvalid', "");
  }
});
