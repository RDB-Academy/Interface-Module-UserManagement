import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-chart-bottom', 'Integration | Component | profile chart bottom', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('chart_data', [1,2,3,4,5,6]);

  this.render(hbs`{{profile-chart-bottom chart_data}}`);

  assert.equal(this.$().text().trim(), '');
});
