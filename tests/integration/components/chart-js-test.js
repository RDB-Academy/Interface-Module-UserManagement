import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chart-js', 'Integration | Component | chart js', {
  integration: true
});

test('it renders', function(assert) {
  var testData = {
    username: "fabio",
    sql: 10,
    ra: 20,
    bla: 40
  };
  this.set('ownerData', testData);
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chart-js owner=ownerData}}`);

  assert.equal(this.$().text().trim(), '');
/*
  // Template block usage:
  this.render(hbs`
    {{#chart-js}}
      template block text
    {{/chart-js}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');*/
});
