'use strict';
function repeat(operation, num) {
  // SOLUTION GOES HERE
  while(num){
    operation();
    num--;
  }
}

// official solution: 
// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }


// Do not remove the line below
module.exports = repeat;