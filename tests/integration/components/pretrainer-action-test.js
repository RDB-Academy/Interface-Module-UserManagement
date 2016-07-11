import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pretrainer-action', 'Integration | Component | pretrainer action', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pretrainer-action}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pretrainer-action}}
      template block text
    {{/pretrainer-action}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
