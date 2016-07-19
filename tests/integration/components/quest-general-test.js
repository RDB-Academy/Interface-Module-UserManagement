import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('quest-general', 'Integration | Component | quest general', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let quest = Ember.Object.create({
    title: "Finish 5 Sql-Statements",
    'value-min': 0,
    'value-max': 5,
    'value-now': 2,
    points: 20
  });

  this.set('quest', quest);

  this.render(hbs`{{quest-general quest}}`);

  assert.ok(this.$()[0].innerHTML.indexOf(quest.title) > -1);
});
