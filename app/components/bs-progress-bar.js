import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['progress-bar'],
  classNameBindings: ['isLargerThan50:progress-bar-success'],
  attributeBindings: ['style', 'ariaValuenow', 'ariaValuemin', 'ariaValuemax'],

  ariaValuenow: Ember.computed.alias('value'),
  ariaValuemin: Ember.computed.alias('minValue'),
  ariaValuemax: Ember.computed.alias('maxValue'),

  percent: Ember.computed('value', 'minValue', 'maxValue', function() {
    let value = parseFloat(this.get('value'));
    let minValue = parseFloat(this.get('minValue'));
    let maxValue = parseFloat(this.get('maxValue'));

    return Math.min(Math.max((value - minValue) / (maxValue - minValue), 0), 1) * 100;
  }),

  isLargerThan50: Ember.computed('percent', function() {
    return this.get('percent') >= 50;
  }),

  outputString: Ember.computed('value', 'maxValue', function() {
    let value = parseFloat(this.get('value'));
    let maxValue = parseFloat(this.get('maxValue'));

    return value + "/" + maxValue;
  }),

  style: Ember.computed('percent', function() {
    let percent = this.get('percent');
    return new Ember.Handlebars.SafeString(`width: ${percent}%`);
  })
});
