var input = require("fs").readFileSync("./1006/stdin", "utf8")
var lines = input.split(" ");



let A, B, C, D;

A = parseInt(lines.shift());
B = parseInt(lines.shift());
C = parseInt(lines.shift());
D = parseInt(lines.shift());
console.log('DIFERENCA =',(A * B) - (C * D));



