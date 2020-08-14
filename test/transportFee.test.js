let assert = require('assert');
let transportFee = require('../transportFee');

describe('The transportFee function', function () {

    it('should return the right price based on the shift you are working.', function () {
        assert.equal('R' + 20, transportFee('morning'));
        assert.equal('R' + 10, transportFee('afternoon'));
        assert.equal('free', transportFee('nightshift'));


    });

});