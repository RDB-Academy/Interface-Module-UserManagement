import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('friend-profile', 'Integration | Component | friend profile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{friend-profile}}`);

  assert.ok(this.$().text !== '');

  // Template block usage:
  this.render(hbs`
    {{#friend-profile}}
      template block text
    {{/friend-profile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
