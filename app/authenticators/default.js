import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const {RSVP: {Promise} } = Ember;

export default Base.extend({
  ajax: Ember.inject.service(),

  restore(data) {
    return new Promise((resolve, reject) => {
      console.log(data);
      resolve({username: "FabioMazzone"});
      reject("Dummy");
    });
  },

  authenticate(emailAddress, password) {
    return new Promise((resolve, reject) => {
      this.get('ajax').post('/login', {
        data: JSON.stringify({
          emailAddress: emailAddress,
          password: password
        })
      }).then((data) => {
        console.log(data);
        resolve({username: "FabioMazzone"});
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  },

  invalidate(data) {
    return new Promise((resolve, reject) => {
      console.log(data);
      resolve(true);
      reject("Dummy");
    });
  }
});
