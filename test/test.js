const assert = require('assert');
const stupidParseInt = require('..').stupidParseInt;

describe('stupidParseInt', function () {
    it('should return 5 when given \'5\'', function () {
        assert.equal(stupidParseInt('5').num, 5);
    });
});