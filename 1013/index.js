var input = require("fs").readFileSync("./1013/stdin", "utf8")
var lines = input.split("\n");

let NUMEROS, MAIORAB, ARRAY;

NUMEROS = lines.shift();
ARRAY =  NUMEROS.split(" ").map(Number);

MAIORAB = Math.abs((ARRAY[0] - ARRAY[1]));
MAIORAB += ARRAY[0] + ARRAY[1];
MAIORAB = MAIORAB / 2;

if(MAIORAB > ARRAY[2]){
    console.log(MAIORAB,"eh o maior");
}
else{
    console.log(ARRAY[2],"eh o maior");
}




