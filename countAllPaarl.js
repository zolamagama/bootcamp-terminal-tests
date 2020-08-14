module.exports = function countAllPaarl (regnumber){
    // console.log(regnumber)
    var regList = regnumber.split(',');
     var array = []
     
     for (var i = 0; i < regList.length; i++) {
      var reg =  regList[i].trim();
      if (reg.startsWith('CJ')) {
        array.push(reg)
       }
     }
    //  console.log(array)
     return array.length;
   }