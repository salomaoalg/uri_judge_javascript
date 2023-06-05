var input = require("fs").readFileSync("./1039/stdin", "utf8")
var lines = input.split("\n");
         //  0   1   2   3   4   5   6   7
var precos = [4.00, 4.50, 5.00, 2.00, 1.50]
ent = lines.shift().split(" ").map(Number);
console.log("Total: R$",(precos[ent[0] - 1] * ent[1]).toFixed(2));

console.log(ent);



//console.log(total);