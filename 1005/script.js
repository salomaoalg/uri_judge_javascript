var input = require("fs").readFileSync("./1004/stdin", "utf8")
var lines = input.split(" ");

let FATOR1, FATOR2;

FATOR1 = parseInt(lines.shift());
FATOR2 = parseInt(lines.shift());
console.log('PROD =', FATOR1 * FATOR2);

