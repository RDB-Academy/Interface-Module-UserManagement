import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('thumbnail-horizontal', 'Integration | Component | thumbnail horizontal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{thumbnail-horizontal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#thumbnail-horizontal}}
      template block text
    {{/thumbnail-horizontal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
