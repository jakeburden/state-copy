var test = require('tape')
var stateCopy = require('../')

test('state copy', function (t) {
  stateCopy({ foo: 'bar' })
  t.ok(true)
  t.end()
})
