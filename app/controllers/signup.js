import Ember from 'ember';
import {isBadRequestError, isNotFoundError} from 'ember-ajax/errors';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service('session'),

  username: "test",
  emailAddress: "test@test.de",
  password: "test",

  usernameError: 0,
  emailAddressError: 0,
  passwordError: 0,

  usernameObserver: Ember.observer('username', function() {
    var username = this.get('username');

    if(username.length > 3) {
      Ember.run.debounce(this, this.validateUsername, 250);
    } else {
      this.set('usernameError', -1);
    }
  }),

  emailAddressObserver: Ember.observer('emailAddress', function() {
    var emailAddress = this.get('emailAddress');

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

      if((usernameError === 0 && emailAddressError === 0 && password.length > 3)) {
        this.get('ajax').post('/users', {
          data: JSON.stringify({
            username: username,
            emailAddress: emailAddress,
            password: password
          })
        }).then((data) => {
          console.log(data);
          //this.get('session').authenticate('authenticator:default', emailAddress, password).catch((reason) => {
          //  console.log(reason);
          //});
        }).catch((error) => {
          if(isBadRequestError(error)) {
            var errors = error.errors;
            for(var i = 0; i < errors.length; i++) {
              // ToDo
              switch (errors[i].field) {
                case 'username':
                  this.set('usernameError', 1);
                  break;
                case 'emailAddress':
                  this.set('emailAddressError', 1);
                  break;
                case 'password':
                  this.set('passwordError', 1);
                  break;
                default:

              }
            }
          } else {
            console.log(error);
          }
        });

      } else {
        if(usernameError !== 0) {
          this.set('usernameError', 1);
        }

        if(emailAddressError !== 0) {
          this.set('emailAddressError', 1);
        }

        if(passwordError !== 0) {
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
      this.get('ajax').request('/users?username=' + username, {
        method: 'HEAD'
      }).then(() => {
        _that.set('usernameError', 1);
      }).catch((error) => {
        if(isNotFoundError(error)) {
          _that.set('usernameError', 0);
        } else {
          console.log("Error - validateUsername");
          console.log(error);
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
      this.get('ajax').request('/users?emailAddress=' + emailAddress, {
        method: 'HEAD'
      }).then(() => {
        _that.set('emailAddressError', 1);
      }).catch(function(error) {
        if(isNotFoundError(error)) {
          _that.set('emailAddressError', 0);
        } else {
          console.log("Error - validatingEmailAddress");
          console.log(error);
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
