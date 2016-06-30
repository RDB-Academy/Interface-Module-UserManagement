import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-carousel', 'Integration | Component | profile carousel', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{profile-carousel}}`);

  assert.ok(this.$() !== null);

  // Template block usage:
  this.render(hbs`
    {{#profile-carousel}}
      template block text
    {{/profile-carousel}}
  `);

  assert.ok(this.$().text().trim().indexOf('template block text') > -1);
});
