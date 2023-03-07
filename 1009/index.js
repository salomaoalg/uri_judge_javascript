const { parse } = require("path");

var input = require("fs").readFileSync("./1009/stdin", "utf8")
var lines = input.split("\n");



let N, SALARIO, VENDAS;

N = lines.shift();
SALARIO = parseFloat(lines.shift());
VENDAS = parseFloat(lines.shift());

console.log('TOTAL = R$', (SALARIO + ((VENDAS * 15)/ 100)).toFixed(2));




