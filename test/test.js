QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST add', assert => {
  assert.equal(add(1, 1), 2, 'Positive integers')
  assert.equal(add(-1, -1), -2, 'Negative integers')
  assert.equal(add(-10, 10), 0, 'Mixed')
})

