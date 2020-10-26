var input = require('fs').readFileSync('stdin', 'utf8')

var [participants, research] = input.split('\n') // [ '5', '1 1 1 1' ]

// retrieve the number of participants from line input
participants = parseInt(participants)

// store the research results
var results = {
  satisfatory: 0,
  not: 0,
}

// map to transform into array && every element to Number
research = research.split(' ').map((res) => parseInt(res))

// map the array to apply calculations:
/** 0 means is satisfatory
 *  1 means is NOT satisfatory */
research.forEach((element) => {
  if (element > 0) {
    results.not++
  } else {
    results.satisfatory++
  }
})

// return result
if (results.satisfatory > results.not) {
  console.log('Y')
} else {
  console.log('N')
}
