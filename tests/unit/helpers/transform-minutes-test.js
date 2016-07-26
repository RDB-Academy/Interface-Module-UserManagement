import { transformMinutes } from 'usermanagement-frontend/helpers/transform-minutes';
import { module, test } from 'qunit';

module('Unit | Helper | transform minutes');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(transformMinutes(61) === "1h 01m");
});
