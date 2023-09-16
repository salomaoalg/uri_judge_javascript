var input = require("fs").readFileSync("./1042/stdin", "utf8")
var lines = input.split("\n");

var X, Y;
NROS = lines.shift().split(" ").map(Number);
Y = toString(NROS);

console.log(Y)

NROS.sort(function(a, b){
  return a - b;
});

for(X = 0; X < NROS.length; X++){
  console.log(NROS[X]);
}

console.log(Y);










