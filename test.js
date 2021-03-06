var csd = require('./index');
var should = require('should');
var fs = require('fs');

describe('coffeescript-detector', function() {

  it('should pass back err if the 1st param is not a string', function(done) {
    csd(1, function(err) {
      err.toString().should.be.equal('Error: coffeescript-detector usage: fn(string, function)');
      done();
    });
  });

  it('should pass back null if no cs markings are found', function(done) {
    csd('no coffee found in here', function(err, obj) {
      should.equal(null, err);
      should.equal(null, obj);
      done();
    });
  });

  it('should test if a file has coffee-script markings', function(done) {
    var coffeescript = require('coffee-script');
    csd(
      coffeescript.compile(
        fs.readFileSync('./sample.coffee').toString(),
        { header: true }
      ),
      function(
        err,
        result
      ) {
          should.equal(err, null);
          result.should.have.property('lines');
          var lines = result.lines;
          done();
      }
    );
  });

});
