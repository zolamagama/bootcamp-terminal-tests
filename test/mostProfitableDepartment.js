module.exports = function mostProfitableDepartment (salesData){
    var mostProfitDep = {};
    
    for (var i=0; i<salesData.length; i++) {
      var depart = salesData[i].department
    
      if (mostProfitDep[depart] === undefined){
        mostProfitDep[depart] = 0;
      }
      else {
          
      mostProfitDep[depart] +=  salesData[i].sales
      }
    }
    var mostSales = 0;
    var mostDep = ''
  // console.log( mostProfitDep)
    for (var x in mostProfitDep){
    if (mostProfitDep[x] > mostSales){
      mostDep = x;
      mostSales = mostProfitDep[x]
    }
    }
  //  console.log(mostDep)
    return mostDep
  }
  module.exports = function mostProfitableDay (weekday){
    var mostProfitDay = {} ;
      for (var k=0; k<weekday.length; k++) {
      var bestDay = weekday[k].day
      if (mostProfitDay[bestDay] === undefined) {
      mostProfitDay[bestDay] = weekday[k].sales;
      
     }
        else { 
          mostProfitDay[bestDay] += weekday[k].sales
      }
      }
      var mostProfit = 0;
      var bestWeekDay = '';
        // console.log(mostProfitDay)
      for (var money in mostProfitDay){
        if (mostProfitDay[money] > mostProfit) {
      bestWeekDay = money;
        mostProfit = mostProfitDay[money]
        }
      }
    // console.log(bestWeekDay)
      return bestWeekDay
    }