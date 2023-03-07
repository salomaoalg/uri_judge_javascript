var input = require("fs").readFileSync("./1005/stdin", "utf8")
var lines = input.split(" ");

let A,B,MEDIA

A = parseFloat(lines.shift());
B = parseFloat(lines.shift());

MEDIA = ((A * 3.5) + (B * 7.5)) / 11;



console.log("MEDIA =",MEDIA.toFixed(5)); 

