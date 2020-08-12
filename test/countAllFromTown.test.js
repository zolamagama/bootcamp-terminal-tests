let assert = require('assert');
let countAllFromTown = require('./countAllFromTown');

describe('The countAllFromTown function', function(){

it(' should return number registration numbers in the string that is for that town.', function() {
    // var fromCapeTown = ('CA 1343, CA 479201', 'CA');
    var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
    //fromStellies should contains
    // assert.deepEqual(fromCapeTown, 2);
    assert.deepEqual(fromStellies, 3);
});




})