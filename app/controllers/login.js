import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  emailAddress: "test@test.de",
  password: "test",

  actions: {
    submit() {
      var email = this.get('emailAddress');
      var password = this.get('password');

      if(!(Ember.isEmpty(email) || Ember.isEmpty(email))) {
        this.get('session').authenticate('authenticator:default', email, password).catch((reason) => {
          console.log(reason);
        });
      } else {
        jQuery('.login-form').addClass('invalid');
      }
      Ember.run.debounce(this, this.resetInvalidStatus, 500);
    }
  },

  resetInvalidStatus: function() {
    jQuery('.login-form').removeClass('invalid');
  }
});
