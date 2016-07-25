import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const {RSVP: {Promise} } = Ember;

export default Base.extend({
  ajax: Ember.inject.service(),

  restore(data) {
    return new Promise((resolve, reject) => {
      if(data.expiresAt < new Date()) {
        console.log("session is expired");
        return reject();
      }
      this.get('ajax').post('/restore', {
        data: JSON.stringify({
          sessionToken: data.token
        })
      }).then((data) => {
        resolve(data);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
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
        resolve(data);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  },

  invalidate(data) {
    return new Promise((resolve, reject) => {
      console.log(data);
      this.get('ajax').post('/logout', {
        data: JSON.stringify({
          sessionToken: data.token
        })
      }).then((data) => {
        resolve(data);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  }
});
