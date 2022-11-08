var input = require("fs").readFileSync("./1003/stdin", "utf8")
var lines = input.split(" ");


var PI = 3.14159;
var RAIO = parseFloat(lines.shift());
var AREA =  PI * Math.pow(RAIO, 2);

console.log('A=' + AREA.toFixed(4));