var input = require("fs").readFileSync("./1015/stdin", "utf8")
var lines = input.split("\n");

let DISTANCIA, ARRAY_X1Y1, ARRAY_X2Y2, ARRAY_ALL = {}, XX, YY;

ARRAY_ALL[0] = lines.shift();
ARRAY_ALL[1] = lines.shift();
ARRAY_X1Y1 = ARRAY_ALL[0].split(" ").map(parseFloat);
ARRAY_X2Y2 = ARRAY_ALL[1].split(" ").map(parseFloat);

XX = ((ARRAY_X2Y2[0] ) - (ARRAY_X1Y1[0]))
XX = XX * XX;

YY = ((ARRAY_X2Y2[1] - ARRAY_X1Y1[1]))
YY = YY * YY;

DISTANCIA = Math.sqrt(XX + YY)
console.log(DISTANCIA.toFixed(4));

