import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  array: [1,2,3,4,5,6],
  activeSet: 1,

  init: function() {
    console.log("session Data");
    console.log(this.get('session.data.authenticated'));
    console.log("End Session Data");
  },
  dostuff: function() {
    console.log(this.get('chartData'));
  }.observes('chartData'),
  actions: {
    chartDataChanger() {
      this.set("activeSet", (this.get("activeSet") % 4) + 1);
      this.refresh();
      //this.model.set('chartData', data)
    }
  }
});
