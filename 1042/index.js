var input = require("fs").readFileSync("./1042/stdin", "utf8")
var lines = input.split("\n");

let  X, Y = [], NROS;
NROS = lines.shift().split(" ").map(Number);
Y = Y.concat(NROS);


NROS.sort(function(a, b){
  return a - b;
});

for(X = 0; X < NROS.length; X++){
  console.log(NROS[X]);
}

console.log();

for(X = 0; X < Y.length; X++){
  console.log(Y[X]);
}












