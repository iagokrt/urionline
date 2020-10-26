var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

while (true) {
  var cara = 0
  var coroa = 0

  var n = parseInt(lines.shift()) // 5

  if (n === 0) break

  lines
    .shift()
    .split(' ')
    .map((item) => {
      var c = parseInt(item)

      if (c === 0) {
        cara++
      } else {
        coroa++
      }
    })

  console.log(`Mary won ${cara} times and John won ${coroa} times`)
}
