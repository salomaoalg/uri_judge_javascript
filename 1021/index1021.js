var input = require("fs").readFileSync("./1021/stdin", "utf8")
var lines = input.split("\n");
valor = 0;

let notas = [100, 50, 20, 10, 5, 2];
let moedas = [1, 0.50, 0,25, 0.10, 0.05, 0.01];

notas.forEach(element => {
    console.log(element); // O Elemento já é o índice!! 
});


