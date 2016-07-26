import Ember from 'ember';

export function transformMinutes(value) {
  let hours = Math.floor(value / 60);
  let minutes = value % 60;

  if (minutes.toString().length === 1) {
    minutes = '0' + minutes;
  }
  return `${hours}h ${minutes}m`;
}

export default Ember.Helper.helper(transformMinutes);
