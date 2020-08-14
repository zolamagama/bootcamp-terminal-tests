let assert = require('assert');
let isWeekday = require('../isWeekday');

describe('The isWeekday function', function () {

    it('should return true if its a week day', function () {
        // var weekDay = ['Monday, Tuesday, Wednesday, Thursday, Friday'];
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Saturday'), false);

        // assert.equal(false, isWeekday(weekDay)('Saturday'));

    });

})