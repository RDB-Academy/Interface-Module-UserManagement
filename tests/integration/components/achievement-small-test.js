import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('achievement-small', 'Integration | Component | achievement small', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let achievement = Ember.Object.create({
    id: 1,
    title: "Master of SQL",
    description: "Do 1000 SQL Statements",
    image: "img/achievement-logo-01.jpg",
    achievedAt: "2014-04-25T01:32:21.196Z",
    valueMin: 0,
    valueMax: 1000,
    valueNow: 1000,
    points: 20
  });

  this.set('achievement', achievement);

  this.render(hbs`{{achievement-small achievement}}`);

  assert.ok(this.$()[0].innerHTML.indexOf(this.get('achievement').image) > -1);
});
