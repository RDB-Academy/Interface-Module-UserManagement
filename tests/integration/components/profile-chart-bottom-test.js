import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-chart-bottom', 'Integration | Component | profile chart bottom', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{profile-chart-bottom}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#profile-chart-bottom}}
      template block text
    {{/profile-chart-bottom}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
