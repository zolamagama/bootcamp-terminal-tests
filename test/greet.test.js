let assert = require("assert");
let greet = require("./greet");

describe('The greet function', function () {

    it('should greet Hloni correctly', function () {
        assert.equal('Hello, Hloni', greet('Hloni'));
    });
    it('should greet Bayanda correctly', function () {
        assert.equal('Hello, Bayanda', greet('Bayanda'));
    });
});