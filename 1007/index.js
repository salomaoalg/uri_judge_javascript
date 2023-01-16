var input = require("fs").readFileSync("./1007/stdin", "utf8")
var lines = input.split(" ");



let N, SALARIO, HRST;

N = parseInt(lines.shift());
SALARIO = parseInt(lines.shift());
HRST = parseFloat(lines.shift());

console.log('NUMBER =', N);
console.log('SALARY = U$', (SALARIO * HRST).toFixed(2))




//var PI = 3.14159;
//var RAIO = parseFloat(lines.shift());
//var AREA =  PI * Math.pow(RAIO, 2);

//console.log('A=' + AREA.toFixed(4));

//Comando para DEPURAÇÃO/EXECUÇÃO/TESTE
//Lembrando do arquivo STDIN com slipt 
// node .\1003\script.js
