var input = require("fs").readFileSync("./1041/stdin", "utf8")
var lines = input.split("\n");

var X, Y, XY;
XY = notas = lines.shift().split(" ").map(Number);
X = parseFloat(XY[0]);
Y = parseFloat(XY[1]);

if((X + Y) === 0){
  console.log("Origem");
}
else if (X > 0 && Y > 0){
  console.log("Q1");
}
else if(X > 0 && Y < 0){
  console.log("Q4");
}
else if(Y > 0 && X < 0){
  console.log("Q2");
}
else if(Y < 0 && X < 0){
  console.log("Q3");
}
else if(X === 0 && Y > 0){
  console.log("Eixo X")
}
else if(Y === 0 && X > 0){
  console.log("Eixo Y")
}







