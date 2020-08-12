module.exports = function findItemsOver (itemList, threshold){
    var available = [];
    for (var x=0; x<itemList.length;x++) {
      if (itemList[x].qty > threshold) {
        available.push(itemList[x])
      }
    }
    return available;
  }