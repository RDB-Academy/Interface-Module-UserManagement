import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('thumbnail-vertical', 'Integration | Component | thumbnail vertical', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{thumbnail-vertical}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#thumbnail-vertical}}
      template block text
    {{/thumbnail-vertical}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
