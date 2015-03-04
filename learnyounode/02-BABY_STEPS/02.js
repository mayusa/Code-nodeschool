
// var len = process.argv.length;
// var sum = 0;

// for (var i = 2; i < len; i++) {
// 	sum += parseInt(process.argv[i]);
// };

// console.log(sum);


// //official solution
// var result = 0
// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])
// console.log(result)


/* differenct between parseInt and Number

// parseInt如果除第一个符号外一个0-9字符都不是，将返回NaN,
// var i = "adbadf24d5";
// console.log(parseInt(i)); // NaN

// Number对参数更挑剔，稍有不是数字就返回NaN
// Number能用来验证数字串

// parsing:
parseInt("20px");       // 20
parseInt("10100", 2);   // 20
parseInt("2e1");        // 2

// type conversion
Number("20px");       // NaN
Number("2e1");        // 20, exponential notation

Number("010");         // 10
parseInt("010");       // 8, implicit octal
parseInt("010", 10);   // 10, decimal radix used

Number("0xF");   // 15
parseInt("0xF"); //15

*/

var i = "adbadf24d5";
console.log(parseInt(i)); // NaN