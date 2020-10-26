var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

for (let i = 0; i < lines.length; i++) {
  var round = lines[i].split(' ').map((i) => parseInt(i))
  // console.log(round); [1, 1, 0]
  var A = round[0]
  var B = round[1]
  var C = round[2]

  if (A === B && A === C) {
    console.log('*')
  } else if (A === B && A !== C) {
    console.log('C')
  } else if (A !== B && A === C) {
    console.log('B')
  } else if (A !== B && A !== C) {
    console.log('A')
  }
}
