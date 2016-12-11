var assert = require('assert');
var fs = require('fs');

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

describe('Topcoat Navigation Bar', function() {

    it('should output correct mobile dark css', function() {
        var actual = read('css/mobile-dark-navigation-bar.css');
        var expected = read('test/expected/mobile-dark-navigation-bar.css');
        assert.equal(actual, expected, 'should generate correct css');
    });

    it('should output correct mobile light css', function() {
        var actual = read('css/mobile-light-navigation-bar.css');
        var expected = read('test/expected/mobile-light-navigation-bar.css');
        assert.equal(actual, expected, 'should generate correct css');
    });

    it('should not have any unrendered variables', function() {
        var actual = read('css/mobile-light-navigation-bar.css');
        assert.equal(actual.match(/var-[a-z-]*[a-z]+/g), null, 'should not have missing vars');
    });

    it('should not have any unrendered variables', function() {
        var actual = read('css/mobile-dark-navigation-bar.css');
        assert.equal(actual.match(/var-[a-z-]*[a-z]+/g), null, 'should not have missing vars');
    });

});
