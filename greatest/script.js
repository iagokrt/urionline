var input = require('fs').readFileSync('stdin', 'utf8')

var lines = input.split('\n') // [ '3', '5 3', '8 2', ..]

while (true) {
  var pointsA = 0
  var pointsB = 0
  // salva os rounds em n
  var n = parseInt(lines.shift())

  // se numero de rounds for 0 braka
  if (n == 0) break

  for (let i = 0; i < n; i++) {
    var move = lines.shift().split(' ')
    console.log(move)
    var a = parseInt(move[0])
    var b = parseInt(move[1])

    if (a > b) {
      pointsA++
    }

    if (b > a) {
      pointsB++
    }
  }
  console.log(pointsA + ' ' + pointsB)
}
