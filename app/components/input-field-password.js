import Ember from 'ember';
// Value, showDifficultyBar = true, formError = false
const InputFieldPassword = Ember.Component.extend({
  tagName: 'div',
  classNames: ['input-field', 'password'],
  value: "test",
  showPasswordDifficulty: true,
  formError: false,

  passwordScore: Ember.computed('showPasswordDifficulty', function() {

  }),
  indicatorStatus: Ember.computed('formError', 'passwordScore', function() {

  }),

});

InputFieldPassword.reopenClass({

});

export default InputFieldPassword;
