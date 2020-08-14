let assert = require('assert');
let totalPhoneBill = require('../totalPhoneBill');

describe('The totalPhoneBill function', function(){

it('should return R7.45', function(){

assert.equal('R'+ 7.45, totalPhoneBill('call, sms, sms, sms, call'));
});



});