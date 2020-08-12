module.exports = function countRegNumber(reg){
    var regList = reg.split(',')
    return regList.length;
  }