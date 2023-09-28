const assert = require('assert');
const stupidParseInt = require('..').stupidParseInt;

describe('stupidParseInt', function () {
    it('should return 5 when given \'5\' with radix 10', function () {
        assert.equal(stupidParseInt({ str: '5', rad: 10 }), 5);
    });
});