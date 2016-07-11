import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('achievement-small', 'Integration | Component | achievement small', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{achievement-small}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#achievement-small}}
      template block text
    {{/achievement-small}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
