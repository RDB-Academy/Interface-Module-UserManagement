import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  array: [1,2,3,4,5,6],

  init: function() {
    //console.log("session Data");
    //console.log(this.get('session.data.authenticated'));
    //console.log("End Session Data");
  },
});
