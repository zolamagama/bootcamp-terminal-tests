module.exports = function findItemsOver20 (itemList) {
    // console.log(itemList) 
     var expensive = [] ;
      for (var i=0; i<itemList.length; i++) {
       if (itemList[i].qty > 20) {
         expensive.push(itemList[i])
      }
      }
     return expensive
          
   
   }