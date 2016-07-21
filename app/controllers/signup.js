import Ember from 'ember';

export default Ember.Controller.extend({
  username: "testuser",
  emailAddress: "test@test.de",
  password: "test",

  passwordscore: 0,

  actions: {
    usernameChanged() {
      var username = this.get('username');
      if(username.length > 5) {
        Ember.run.debounce(this, this.validateUsername, 500);
      }
    },

    emailAddressChanged() {
      Ember.run.debounce(this, this.validateEmailAddress, 500);
    },

    passwordChanged() {
      if(!Ember.isEmpty(this.get('password'))) {
        Ember.run.debounce(this, this.validatePassword, 500);
      }
    },

    submit() {
      var username = this.get('username');
      var emailAddress = this.get('emailAddress');
      var password = this.get('password');
      if(!(Ember.isEmpty(username) || Ember.isEmpty(emailAddress) || Ember.isEmpty(password))) {
        console.log(username);
        console.log(emailAddress);
        console.log(password);
      }

    }
  },

  validateUsername: function() {
    var username = this.get('username');
    var re = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    if(re.test(username)) {
      console.log(username);
    }
  },

  validateEmailAddress: function() {
    var emailAddress = this.get('emailAddress');
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(re.test(emailAddress)) {
      console.log(emailAddress);
    }
  },

  validatePassword: function() {
    var password = this.get('password');
    var result = zxcvbn(password)
    console.log(result.score);
    this.set('passwordScore', result.score);
  }


});
