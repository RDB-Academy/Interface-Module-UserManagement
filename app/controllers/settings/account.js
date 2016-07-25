import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changePassword() {
      var oldPassword = this.get('oldPassword');
      var newPassword1 = this.get('newPassword1');
      var newPassword2 = this.get('newPassword2');
      //console.log(oldPassword);
      //console.log(newPassword1);
      //console.log(newPassword2);

      if (newPassword1 !== newPassword2) {
        console.log("Password confirmation incorrect");
      } else {
        if (oldPassword === newPassword1) {
          console.log("Old and new Password are the same");
          return;
        }
        console.log("Insert password -> backend");
      }

    }
  }
});
