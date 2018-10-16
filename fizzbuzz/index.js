//console.logs numbers 1 to n, multiples of 3 print fizz, multiples of 5 print buzz, multiples of 15 print fizzbuzz

function fizzBuzz(int) {
  for (var i = 1; i <= int; i++) {
    if (i % 15 === 0) {
        console.log('fizzbuzz')
    }
    else if (i % 5 === 0) {
        console.log('buzz')
    }
    else if (i % 3 === 0) {
        console.log('fizz')
    }
    else {
        console.log(i)
    }
  }
}

module.exports = fizzBuzz;