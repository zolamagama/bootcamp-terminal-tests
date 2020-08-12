module.exports = function yearsAgo (thatday) {
    var day1 = new Date();
    var day2 = day1.getFullYear() - thatday;
    return day2;
  }