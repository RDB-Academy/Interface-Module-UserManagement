import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-stat-radar', 'Integration | Component | profile stat radar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{profile-stat-radar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#profile-stat-radar}}
      template block text
    {{/profile-stat-radar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
