import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service('session'),
  errorMessage: '',
  hasError: false,
  success: false,


  actions: {
    changePassword() {
      var password = this.get('password');
      var newPassword = this.get('newPassword');
      var newPasswordVerification = this.get('newPasswordVerification');
      this.set('errorMessage', '');
      this.set('hasError', false);
      if (!(Ember.isEmpty(password) || Ember.isEmpty(newPassword) || Ember.isEmpty(newPasswordVerification))) {
        if (newPassword !== newPasswordVerification) {
        this.set('newPasswordError', 1);
        this.set('newPasswordVerificationError', 1);
        this.set('hasError', true);
        this.set('errorMessage', ' New password and verification don\'t match');
        } else {
          this.get('ajax').post('/settings/account', {
            data: JSON.stringify({
              password: password,
              newPassword: newPassword
            })
          }).then((data) => {
            //Neues Passwort in die Datenbank
            this.set('success', true);
            this.set('errorMessage', ' Successfully changed password');
            console.log('successfulPW');
          }).catch((error) => {
            this.set('passwordError', 1);
            this.set('hasError', true);
            this.set('errorMessage', ' Wrong password');
            console.log(error);
          });
        }
      }
    }
  }
});
