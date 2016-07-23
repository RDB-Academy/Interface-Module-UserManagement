import Ember from 'ember';
// Value, showDifficultyBar = true, valueError = false
const InputFieldPassword = Ember.Component.extend({
  classNames: ['input-field', 'password'],

  value: "",
  placeholder: "Password",

  showPasswordDifficulty: true,
  valueError: -1,
  passwordScore: -1,

  indicatorStatus: "",

  valueObserver: Ember.observer('value', function() {
    var value = this.get('value');
    if(value.length > 3) {
      this.set('valueError', 0);
      if(this.get('showPasswordDifficulty')) {
        Ember.run.debounce(this, this.validatePassword, 250);
      }
    } else {
      this.set('valueError', -1);
    }
  }),

  indicatorStatus: Ember.computed('valueError', 'passwordScore', 'showPasswordDifficulty', function() {
    var valueError = this.get('valueError');
    var showPasswordDifficulty = this.get('showPasswordDifficulty');
    
    if(valueError != 0) {
      return (valueError == 1) ? "status-error" : "";
    }
    if(showPasswordDifficulty) {
      var score = this.get('passwordScore');
      return "status-" + score;
    }
  }),

  validatePassword() {
    var value = this.get('value');
    var result = zxcvbn(value);
    this.set('passwordScore', result.score + 1);
  },

});

InputFieldPassword.reopenClass({

});

export default InputFieldPassword;
