const test = require('tape')
const hasDIDMethod = require('./')

test("hasMethod(uri) throws", (t) => {
  t.throws(() => hasDIDMethod(1234), TypeError)
  t.throws(() => hasDIDMethod({ }), TypeError)
  t.end()
})

test("hasMethod(uri)", (t) => {
  t.true(true == hasDIDMethod('did:ara:1234'))
  t.true(false == hasDIDMethod('did::1234'))
  t.true(false == hasDIDMethod('1234'))
  t.end()
})