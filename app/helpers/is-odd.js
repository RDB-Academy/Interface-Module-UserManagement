import Ember from 'ember';

export function isOdd(number) {
  return number % 2 === 1;
}

export default Ember.Helper.helper(isOdd);
