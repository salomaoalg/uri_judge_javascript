var input = require("fs").readFileSync("./1004/stdin", "utf8")
var lines = input.split(" ");

let A, B;

A = parseInt(lines.shift());
B = parseInt(lines.shift());
console.log('SOMA =',(A+B));

//var PI = 3.14159;
//var RAIO = parseFloat(lines.shift());
//var AREA =  PI * Math.pow(RAIO, 2);

//console.log('A=' + AREA.toFixed(4));

//Comando para DEPURAÇÃO/EXECUÇÃO/TESTE
//Lembrando do arquivo STDIN com slipt 
// node .\1003\script.js