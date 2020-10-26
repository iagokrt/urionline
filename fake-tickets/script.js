var input = require('fs').readFileSync('stdin', 'utf8')

var lines = input.split('\n')

while (true) {
  var valores = lines.shift().split(' ')
  var N = parseInt(valores[0])
  var M = parseInt(valores[1])

  if (N === 0 && M === 0) break

  var linha2 = lines
    .shift()
    .split(' ')
    .map((item) => parseInt(item))

  var table = new Object()
  var count = 0

  for (var item of linha2) {
    if (table[item] === undefined) {
      table[item] = 0
    } else if (table[item] === 0) {
      table[item] = 1
      count++
    }
  }

  console.log(count)
}
