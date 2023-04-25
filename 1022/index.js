var input = require("fs").readFileSync("./1021/stdin", "utf8")
var lines = input.split("\n");

let arrayn = [];

for (let cont; cont < 3; cont++){
    arrayn[cont] = parseInt(lines.shift());
}

console.log(arrayn);