let assert = require('assert');
let countRegNumber = require('./countRegNumber');

describe('The countRegNumber function', function () {

    it('should return the correct number of registration numbers', function () {
        assert.deepEqual(3, countRegNumber('CA 182736,CY 523519,CJ 812328'))

    })


})