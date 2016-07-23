import Ember from 'ember';

export default Ember.Controller.extend({
  username: "",
  emailAddress: "",
  password: "",

  usernameError: -1,

  emailAddressError: -1,

  passwordError: -1,

  usernameObserver: Ember.observer('username', function() {
    var username = this.get('username');
    var usernameError = this.get('usernameError');
    if(username.length > 3) {
      Ember.run.debounce(this, this.validateUsername, 250);
    } else {
      this.set('usernameError', -1);
    }
  }),

  emailAddressObserver: Ember.observer('emailAddress', function() {
    var emailAddress = this.get('emailAddress');
    var emailAddressError = this.get('emailAddressError');
    if(emailAddress.length > 4 ) {
      Ember.run.debounce(this, this.validateEmailAddress, 250);
    } else {
      this.set('emailAddressError', -1);
    }

  }),

  actions: {
    submit() {
      var username          = this.get('username');
      var emailAddress      = this.get('emailAddress');
      var password          = this.get('password');

      var usernameError     = this.get('usernameError');
      var emailAddressError = this.get('emailAddressError');
      var passwordError     = this.get('passwordError');

      if((usernameError == 0 && emailAddressError == 0 && password.length > 3)) {
        console.log(username);
        console.log(emailAddress);
        console.log(password);

      } else {
        if(usernameError != 0) {
          this.set('usernameError', 1);
        }

        if(emailAddressError != 0) {
          this.set('emailAddressError', 1);
        }

        if(passwordError != 0) {
          this.set('passwordError', 1);
        }

        jQuery('.sign-up-form').addClass('invalid');
      }
      Ember.run.debounce(this, this.resetInvalidStatus, 500);
    }
  },

  validateUsername() {
    var username = this.get('username');
    var _that = this;
    var re = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-)[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    if(re.test(username)) {
      jQuery.ajax({
        type:   "HEAD",
        async:  true,
        url:    "/user?username="+username
      }).done(function() {
        _that.set('usernameError', 1);
      }).fail(function(jqXHR) {
        if(jqXHR.status = 404) {
          _that.set('usernameError', 0);
        } else {
          console.log("Error while validating Username");
        }
      });
    } else {
      this.set('usernameError', 1);
    }
  },

  validateEmailAddress() {
    var emailAddress = this.get('emailAddress');
    var _that = this;
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(re.test(emailAddress)) {
      jQuery.ajax({
        type:   "HEAD",
        async:  true,
        url:    "/user?emailAddress="+emailAddress
      }).done(function () {
        _that.set('emailAddressError', 1);
      }).fail(function(jqXHR) {
        if(jqXHR.status = 404) {
          _that.set('emailAddressError', 0);
        } else {
          console.log("Error while validating emailAddress");
        }
      });
    } else {
      this.set('emailAddressError', 1);
    }
  },

  resetInvalidStatus() {
    jQuery('.sign-up-form').removeClass('invalid');
  }
});
