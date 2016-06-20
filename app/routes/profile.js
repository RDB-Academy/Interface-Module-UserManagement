import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return {
        chartData: [1,2,3,4,56,3]
      }
  }
});
