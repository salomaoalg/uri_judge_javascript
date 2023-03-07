var input = require("fs").readFileSync("./1011/stdin", "utf8")
var lines = input.split("\n");

let RAIO, VOLUME;

RAIO = parseInt(lines.shift());
VOLUME = (4/3.0) * 3.14159 * Math.pow(RAIO, 3);
console.log("VOLUME =",VOLUME.toFixed(3)) 

