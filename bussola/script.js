var input = require('fs').readFileSync('stdin', 'utf8')

var lines = input.split('\n')

while (true) {
  var movements = parseInt(lines.shift())

  if (movements == 0) break

  var commands = lines.shift()

  var movesCounter = 0

  for (let i = 0; i <= commands.length; i++) {
    if (commands[i] == 'D') {
      movesCounter++
    }
    if (commands[i] == 'E') {
      movesCounter--
    }
  }

  var direction = movesCounter % 4
  /**
   * N  0
   * L -3 1
   * S -2 2
   * O -1 3
   */

  if (direction == 0) {
    console.log('N')
  }
  if (direction == 1 || direction == -3) {
    console.log('L')
  }
  if (direction == 2 || direction == -2) {
    console.log('S')
  }
  if (direction == 3 || direction == -1) {
    console.log('O')
  }
}
