var input = require("fs").readFileSync("./001/stdin","utf8");

var lines = input.split(" ");

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

console.log('X = ' + (a+b));