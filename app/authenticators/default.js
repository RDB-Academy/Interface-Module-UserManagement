import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const {RSVP: {Promise} } = Ember;

export default Base.extend({
  restore(data) {
    return new Promise((resolve, reject) => {
      console.log(data);
      resolve({username: "FabioMazzone"});
      reject("Dummy");
    });
  },

  authenticate(identicator, password) {
    return new Promise((resolve, reject) => {
      if(identicator === 'test@test.de' && password === 'test') {
        resolve({username: "FabioMazzone"});
      }
      reject("Test");
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
