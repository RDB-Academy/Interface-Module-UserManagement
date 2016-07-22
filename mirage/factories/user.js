import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i + 100;
  },
  username() {
    return faker.internet.userName();
  },

  emailAddress() {
    return faker.internet.email();
  }
});
