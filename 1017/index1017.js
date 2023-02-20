var input = require("fs").readFileSync("./1017/stdin", "utf8")
var lines = input.split("\n");

let TEMPO, KMH;

TEMPO = parseInt(lines.shift());
KMH = parseInt(lines.shift());

console.log(((TEMPO * KMH) / 12).toFixed(3));


