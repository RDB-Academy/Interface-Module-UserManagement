import Ember from 'ember';

export default Ember.Controller.extend({


  actions: {
    signUp() {
      var username = this.get('username');
      var emailAddress = this.get('emailAddress');
      var password = this.get('password');
      console.log(username);
      console.log(emailAddress);
      console.log(password);
    }
  }
});
