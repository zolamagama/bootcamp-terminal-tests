let assert = require('assert');
let fromWhere = require('./fromWhere');

describe('The fromWhere function', function () {

    it('should return the town the car is from', function () {
        
        assert.equal(fromWhere('CY 782'),'Bellville');
        assert.equal(fromWhere('CJ 173'),'Paarl');
        assert.equal(fromWhere('CA 536'),'Cape Town');
        assert.equal(fromWhere('GP 361'),'Some other place!');
    
    });

});
