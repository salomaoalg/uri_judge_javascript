const { parse } = require("path");

var input = require("fs").readFileSync("./1009/stdin", "utf8")
var lines = input.split("\n");



let N, SALARIO, VENDAS;

N = lines.shift();
SALARIO = parseFloat(lines.shift());
VENDAS = parseFloat(lines.shift());

console.log('TOTAL = R$', (SALARIO + ((VENDAS * 15)/ 100)).toFixed(2));




//var PI = 3.14159;
//var RAIO = parseFloat(lines.shift());
//var AREA =  PI * Math.pow(RAIO, 2);

//console.log('A=' + AREA.toFixed(4));

//Comando para DEPURAÇÃO/EXECUÇÃO/TESTE
//Lembrando do arquivo STDIN com slipt 
// node .\1003\script.js
