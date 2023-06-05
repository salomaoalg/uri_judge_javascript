var input = require("fs").readFileSync("./1036/stdin", "utf8")
var lines = input.split("\n");

let numeros, entrada, delta, A, B, C, X1, X2;
entrada = lines.shift();
numeros = entrada.split(" ").map(Number); 



A = numeros[0];
B = numeros[1];
C = numeros[2];

delta = Math.pow(B, 2) - 4 * A * C;

X1 = (-B + Math.sqrt(delta)) / ( 2 * A);
X2 = (-B - Math.sqrt(delta)) / ( 2 * A);

if(A > 0 && B > 0 && C > 0 && delta > 0)
{
    console.log("R1 = " + X1.toFixed(5));
    console.log("R2 = " + X2.toFixed(5));
}
else
{
    console.log("Impossivel calcular");
}


console.log(delta);
console.log(X1.toFixed(5));
console.log(X2.toFixed(5));
