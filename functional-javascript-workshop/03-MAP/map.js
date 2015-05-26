'use strict';
function doubleAll(numbers) {
  // SOLUTION GOES HERE
  return numbers.map(function(num, index, array){
  	return num * 2;
  });
}

module.exports = doubleAll;