import Ember from 'ember';

export default Ember.Controller.extend({
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
