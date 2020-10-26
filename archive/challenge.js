const input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')
do {
  var points = {
    a: 0,
    b: 0,
  }

  // salva os rounds em n
  var n = parseInt(lines.shift())

  // se numero de rounds for 0 braka
  if (n == 0) break

  for (let i = 0; i < n; i++) {
    var move = lines.shift().split(' ')

    var a = parseInt(move[0])
    var b = parseInt(move[1])

    if (a > b) {
      points.a++
    }

    if (b > a) {
      points.b++
    }
  }
  console.log(points)
} while (true)

/**
 * 
while (true) {
    var pointsA = 0;
    var pointsB = 0; 
    // remove o primeiro elemento do nosso stdin
    var rounds = parseInt(lines.shift());
    
    // se numero de rounds for 0 braka
    if (rounds == 0) break;
    
    for (let i = 0; i < rounds; i++) {
      var move = lines.shift().split(' ');
      var a = parseInt(move[0]); 
      var b = parseInt(move[1]);
  
      if (a > b) {
        pointsA++;
      }
      
      if (b > a) {
        pointsB++;
      }
    }
    console.log(pointsA + " " + pointsB);
  }
 */
