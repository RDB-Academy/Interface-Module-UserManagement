import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['input-field'],
  value: "",
  placeholder: "test",
  valueError: -1,

  indicatorStatus: Ember.computed('valueError', function() {
    var valueError = this.get('valueError');

    if(valueError === 1) {
      return "status-error";
    } else if (valueError === 0) {
      return "status-ok";
    } else {
      return "";
    }

  })
});
