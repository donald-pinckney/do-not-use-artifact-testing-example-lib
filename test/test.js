const assert = require('assert');
const stupidParseInt = require('..').stupidParseInt;

describe('stupidParseInt', function () {
    it('should return 5 when given \'5\' with radix 10', function () {
        assert.equal(stupidParseInt('5', function() { return 10; }), 5);
    });
});