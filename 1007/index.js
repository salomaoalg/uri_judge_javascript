var input = require("fs").readFileSync("./1007/stdin", "utf8")
var lines = input.split(" ");



let N, SALARIO, HRST;

N = parseInt(lines.shift());
SALARIO = parseInt(lines.shift());
HRST = parseFloat(lines.shift());

console.log('NUMBER =', N);
console.log('SALARY = U$', (SALARIO * HRST).toFixed(2))




