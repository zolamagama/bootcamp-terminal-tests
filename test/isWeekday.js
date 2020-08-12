module.exports = function isWeekday (weekday) {
    // console.log(weekday)
    if (weekday.startsWith('S')) {
        return false
    }
  else {
    return true
  }
  }