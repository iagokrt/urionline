var input = require('fs').readFileSync('stdin', 'utf8')

// save stdin input as integer
var [pl, cl, pr, cr] = input.split(' ').map((item) => parseInt(item))

var result = {
  pl,
  cl,
  pr,
  cr,
}

console.log(result)
