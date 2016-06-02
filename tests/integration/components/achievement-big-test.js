import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('achievement-big', 'Integration | Component | achievement big', {
  integration: true
});

test('it renders', function(assert) {
  let achievement = {
    id: 1,
    title: "Master of SQL",
    description: "Do 1000 SQL Statements",
    image: "img/achievement-logo-01.jpg",
    achievedAt: "01.06.2016",

    minValue: 0,
    maxValue: 1000,
    value: 1000,
    points: 20
  };

  this.set('achievement', achievement);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{achievement-big achievement}}`);

  assert.ok(this.$().text().trim().indexOf("Master of SQL") > -1);

  // Template block usage:
  /*this.render(hbs`
    {{#achievement-big}}
      template block text
    {{/achievement-big}}
  `);
*/
  //assert.equal(this.$().text().trim(), 'template block text');
});
