var input = require('fs').readFileSync('stdin', 'utf8')

var [pl, cl, pr, cr] = input.split(' ').map((item) => parseInt(item))

var result = { pl, cl, pr, cr }

console.log(result)

/* Second attempt of code
const input = require("fs").readFileSync("stdin", "utf8")

// get input from stdin and parse it to Number(Int)
var [p1, c1, p2, c2] = input.split(' ').map(item => parseInt(item))

exports.response = (pl, cl, pr, cr) => {
  // calculate left and right weight balance
  var leftBalance = pl * cl
  var rightBalance = pr * cr

  // default result is balanced
  var result = 0

  if (leftBalance == rightBalance) return console.log(result)

  result = (leftBalance > rightBalance) ? -1 : 1
  return console.log(result)
}

console.log(this.response(p1, c1, p2, c2))

//module.exports = { calculate }

// To run script on terminal:
/**
 *   npx run-func script.js calculate p1 c1 p2 c2 
 */
