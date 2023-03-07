var input = require("fs").readFileSync("./1012/stdin", "utf8")
var lines = input.split("\n");


let A, B, C, DADOS, ARRAY;
DADOS = lines.shift();
ARRAY = DADOS.split(" ", 3);

A = parseFloat(ARRAY[0]);
B = parseFloat(ARRAY[1]);
C = parseFloat(ARRAY[2]);

console.log("TRIANGULO:",((A * C) /2).toFixed(3));
console.log("CIRCULO:",((C * C) * 3.14159).toFixed(3));
console.log("TRAPEZIO:",(((A + B) * C) / 2).toFixed(3));
console.log("QUADRADO:",(B * B).toFixed(3));
console.log("RETANGULO:",(A * B).toFixed(3));


