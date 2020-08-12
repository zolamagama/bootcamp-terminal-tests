let assert = require('assert');
let countAllPaarl = require('./countAllPaarl');

describe('The countAllPaarl function', function(){

it('should return the number of all the registration numbers from Paarl', function() {
// var Paarl = ['CL 900', 'CJ 678 543', 'CA 34567', 'CJ 67890','CN 7864'];
assert.deepEqual(2, countAllPaarl('CJ 678 543, CJ 67890'));
// assert.equal([], countAllPaarl(Paarl))

});



});