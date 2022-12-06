var input = require("fs").readFileSync("./1004/stdin", "utf8")
var lines = input.split(" ");

let FATOR1, FATOR2;

FATOR1 = parseInt(lines.shift());
FATOR2 = parseInt(lines.shift());
console.log('PROD =', FATOR1 * FATOR2);

//var PI = 3.14159;
//var RAIO = parseFloat(lines.shift());
//var AREA =  PI * Math.pow(RAIO, 2);

//console.log('A=' + AREA.toFixed(4));