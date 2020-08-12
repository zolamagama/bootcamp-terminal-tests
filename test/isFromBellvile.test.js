let assert = require("assert");
let isFromBellville = require("./isFromBellvile")

describe('The isFromBellville function', function () {

    it('should return true when registration number starts with CY', function () {
        assert.equal(true, isFromBellville('CY'))
    })

    it('should return false when registration number starts with CJ', function () {
        assert.equal(false, isFromBellville('CJ'))
    })
    it('should return false when registration number starts with CA', function () {
        assert.equal(false, isFromBellville('CA'))
    })
});