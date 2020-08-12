module.exports = function countAllFromTown (regnumber, location) {
    // console.log(regnumber) 
     var regList = regnumber.split(',');
    
     var array = []
     for (var x = 0; x < regList.length; x++){
       var regList2 = regList[x].trim();
       if (regList2.startsWith(location)) {
         array.push(regList2)
   } 
     }
    // console.log(array)
     return array.length;
   }