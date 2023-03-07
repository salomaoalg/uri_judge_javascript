var input = require("fs").readFileSync("./1016/stdin", "utf8")
var lines = input.split("\n");

let DISTANCIA;

DISTANCIA = parseInt(lines.shift());
console.log(DISTANCIA * 2, "minutos");


