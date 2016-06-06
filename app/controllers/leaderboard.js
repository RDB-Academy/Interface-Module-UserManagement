import Ember from 'ember';

export default Ember.Controller.extend({
  array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  state: 'sql',
  isSQLActive: Ember.computed(function() {
    return "btn btn-default" + (this.isActive('sql') ? " active" : "");
  }),
  isRAActive: Ember.computed(function() {
    return "btn btn-default" + (this.isActive('ra') ? " active" : "");
  }),
  isTRCActive: Ember.computed(function() {
    return "btn btn-default" + (this.isActive('trc') ? " active" : "");
  }),
  isActive: function(state) {
    console.log(this.state);
    return this.state === state;
  },
  actions: {
    setState(state) {
      console.log(this.state);
      this.state = state;
    }
  }

});
