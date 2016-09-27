import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service('session'),

  actions: {
    changePassword() {
      var password = this.get('password');
      var newPassword = this.get('newPassword');
      var newPasswordVerification = this.get('newPasswordVerification');
      console.log(password);
      console.log(newPassword);
      console.log(newPasswordVerification);

      if (newPassword !== newPasswordVerification) {
        this.set('newPasswordError', 1);
        this.set('newPasswordVerificationError', 1);
        console.log("newPasswordError");
      }

      if (!(Ember.isEmpty(password) || Ember.isEmpty(newPassword) || Ember.isEmpty(newPasswordVerification))) {
        this.get('ajax').post('/settings/account', {
          data: JSON.stringify({
            password: password,
            newPassword: newPassword
          })
        }).then((data) => {
          console.log(data);
        }).catch((error) => {
          console.log(error);
        });
      }






    //  if (newPassword1 !== newPassword2) {
    //    console.log("Password confirmation incorrect");
    //  } else {
    //    if (oldPassword === newPassword1) {
    //      console.log("Old and new Password are the same");
    //      return;
    //    }
    //    console.log("Insert password -> backend");
    //  }

    }
  }
});
