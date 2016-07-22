import Ember from 'ember';

export default Ember.Controller.extend({
  username: "",
  emailAddress: "",
  password: "",

  showUsernameIndicator: 0,
  usernameHasError: 0,
  isUsernameValid: 0,

  showEmailAddressIndicator: 0,
  emailAddressHasError: 0,
  isEmailAddressValid: 0,

  passwordScore: -1,
  passwordHasError: 0,
  passwordDifficulty: Ember.computed('passwordScore', function() {
    var score = this.get('passwordScore');
    score = score + 1;
    return score;
  }),



  usernameObserver: Ember.observer('username', function() {
    var username = this.get('username');
    if(username.length > 3) {
      this.set('showUsernameIndicator', 1);
      Ember.run.debounce(this, this.validateUsername, 250);
    } else if(username.length === 0) {
      this.set('showUsernameIndicator', 0);
    }
  }),

  emailAddressObserver: Ember.observer('emailAddress', function() {
    var emailAddress = this.get('emailAddress');
    if(emailAddress.length > 4 ) {
      this.set('showEmailAddressIndicator', 1);
      Ember.run.debounce(this, this.validateEmailAddress, 250);
    } else {
      this.set('showEmailAddressIndicator', 0);
    }

  }),

  passwordObserver: Ember.observer('password', function() {
    var password = this.get('password');
    if(password.length > 3) {
      Ember.run.debounce(this, this.validatePassword, 250);
    } else {
      this.set('passwordScore', -1);
    }
  }),

  actions: {
    submit() {
      var username = this.get('username');
      var emailAddress = this.get('emailAddress');
      var password = this.get('password');
      if(!(Ember.isEmpty(username) || Ember.isEmpty(emailAddress) || Ember.isEmpty(password))) {
        console.log(username);
        console.log(emailAddress);
        console.log(password);



      } else {
        if(Ember.isEmpty(username)) {
          this.set('usernameHasError', 1);
        }

        if(Ember.isEmpty(emailAddress)) {
          this.set('emailAddressHasError', 1);
        }

        if(Ember.isEmpty(password)) {
          this.set('passwordHasError', 1);
        }

        jQuery('.sign-up-form').addClass('invalid');
      }
      Ember.run.debounce(this, this.resetInvalidStatus, 500);
    }
  },

  validateUsername: function() {
    var username = this.get('username');
    var _that = this;
    var re = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-)[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    if(re.test(username)) {
      jQuery.ajax({
        type:   "HEAD",
        async:  true,
        url:    "/profile/"+username
      }).done(function( data, status, jqXHR ) {
        _that.set('isUsernameValid', 0);
      }).fail(function(jqXHR) {
        _that.set('usernameHasError', 0);
        _that.set('isUsernameValid', 1);
      });
    } else {
      this.set('isUsernameValid', 0);
    }
  },

  validateEmailAddress: function() {
    var emailAddress = this.get('emailAddress');
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(re.test(emailAddress)) {
      // Call Backend
      // If everything is ok
      this.set('emailAddressHasError', 0);
      this.set('isEmailAddressValid', 1);
    } else {
      this.set('isEmailAddressValid', 0);
    }
  },

  validatePassword: function() {
    var password = this.get('password');
    var result = zxcvbn(password);
    this.set('passwordHasError', 0);
    this.set('passwordScore', result.score);
  },

  resetInvalidStatus: function() {
    jQuery('.sign-up-form').removeClass('invalid');
  }
});
