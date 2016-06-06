import { indexAlignFeatures } from 'usermanagement-frontend/helpers/index-align-features';
import { module, test } from 'qunit';

module('Unit | Helper | index align features');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = indexAlignFeatures(1);
  let result2 = indexAlignFeatures(2);
  assert.ok(result && !result2);
});
