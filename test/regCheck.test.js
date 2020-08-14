let assert = require("assert");
let regCheck = require('../regCheck');

describe('The regCheck function', function () {

    it('it should return true for GP', function () {
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'))

    });
    it('it should return false for MP', function () {
        assert.equal(false, regCheck('DV 23 NB GP', 'MP'))

    });



});