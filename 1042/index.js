var input = require("fs").readFileSync("./1042/stdin", "utf8")
var lines = input.split("\n");

var J, X, Y, AUX;
NROS = lines.shift().split(" ").map(Number);
Y = NROS;



for(X = 1; X < 3; X++){
  if(NROS[X] < NROS[0]){
    AUX = NROS[0]
    NROS[0] = NROS[X];
    NROS[X] = AUX;  
  }
}

console.log(NROS)








