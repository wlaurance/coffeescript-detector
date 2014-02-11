tests = [1..2000]

class TestHandler
  getAll: (cb)->
    cb null, tests

  getOne: (id, cb)->
    if id in tests
      cb null, tests[id]
    else
      cb new Error "ID #{id} not found"

module.exports = TestHandler
