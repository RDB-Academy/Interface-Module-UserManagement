import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:signup', 'Unit | Controller | signup', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('check username validation', function(assert) {
  var controller = this.subject();
  //var username = 'jabba@com.de';
  controller.set('username', 'jabba@com.de');
  assert.equal(controller.get('usernameError'), -1);
  controller.set('username', 'fabiomazzone');
  assert.equal(controller.get('usernameError'), -1);
  controller.set('username', '@@@@@');
  assert.equal(controller.get('usernameError'), 1);

});


/**
test('check emailAddress validation', function(assert) {
  var controller = this.subject();
  assert.equal(controller.get('emailAddressError'), -1);
  controller.send('validateEmailAddress');
  assert.equal(controller.get('emailAddress'), 'jabbcom');
});
*/
