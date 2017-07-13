// You are the "computer man" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5:
//
// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"
//
// Each part of the string is of the form: h|m|s where h, m, s are positive or null integer (represented as strings) with one or two digits. There are no traps in this format.
//
// To compare the results of the teams you are asked for giving three statistics; range, average and median.
//
// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.
//
// Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.
//
// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).
//
// Your task is to return a string giving these 3 values. For the example given above, the string result will be
//
// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
//
// of the form:
//
// "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"
//
// where hh, mm, ss are integers (represented by strings) with each 2 digits.


function stat(strg) {
  if (strg === '') {
  return ''
} else if (strg === "") { // t handle edge cases for tests
  return ""
  } else {

  let times = strg.split(',')
    var inSec = times.map((t)=> {
      return toSec(t)
    })

    return `Range: ${getRange(inSec)} Average: ${getAverage(inSec)} Median: ${getMedian(inSec)}`
  }
}

function getRange(times){

var sorted = times.sort((a, b) => a > b ? 1 : -1 )

var max = sorted[sorted.length-1]
var min = sorted[0]

  return toRaceFormat(max-min)
}

function getAverage(times){

  var total = times.reduce((a,b) => {
    return a + b
  }, 0)

  return toRaceFormat(total/times.length)
}

function getMedian(times){
  let mid = parseInt(times.length / 2)
  var sorted = times.sort((a, b) => a > b ? 1 : -1 )

  if (times.length % 2 == 0){
    return toRaceFormat(parseInt((sorted[mid] + sorted[mid-1])/2))
  } else {
    return toRaceFormat(sorted[mid])
  }
}

//helpers

function toSec(time) {
var t = time.split('|')
return (t[0]*3600)+(t[1]*60)+(t[2]*1)
}

function toRaceFormat(time) {
var hr = addZero(parseInt(time/3600))
var min = addZero(parseInt(time%3600/60))
var sec = addZero((parseInt((time%3600)%60)))

  return `${hr}|${min}|${sec}`
}

function addZero(n){
  if (n > 9) {
    return n
  } else {
    return `0${n}`
  }
}
