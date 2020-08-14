let assert = require('assert');
let findItemsOver = require('../findItemsOver');

describe('The findItemOver function', function () {

    it('should return products that have quantity higher than the threshold.', function () {

        var itemList = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ];
        var results = findItemsOver(itemList, 20)
        var results = [
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },

        ]
        var threshold = 20;
        assert.deepEqual(results,findItemsOver(itemList, threshold));



    });




});