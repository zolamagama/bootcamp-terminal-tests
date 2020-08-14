let assert = require('assert');
let yearsAgo = require('../yearsAgo');

describe('The yearsAgo function', function () {

    it('should return the number of years past when a specific date was on the same day', function () {
assert.equal(20, yearsAgo(2000))

    });


});