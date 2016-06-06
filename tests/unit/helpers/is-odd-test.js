import { isOdd } from 'usermanagement-frontend/helpers/is-odd';
import { module, test } from 'qunit';

module('Unit | Helper | is odd');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = isOdd(1) === true && isOdd(2) === false;
  assert.ok(result);
});
