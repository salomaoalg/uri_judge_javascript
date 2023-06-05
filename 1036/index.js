var input = require("fs").readFileSync("./1036/stdin", "utf8")
var lines = input.split("\n");

let numeros, entrada, delta, A, B, C, X1, X2, X;
entrada = lines.shift();
numeros = entrada.split(" ").map(Number); 



A = numeros[0];
B = numeros[1];
C = numeros[2];

if(C <= 0){
    C = Math.abs(C);
    delta = Math.pow(A,2) + ((4 * B) * C);
    
}
else{
    delta = Math.pow(A,2) - ((4 * B) * C);
    
}

X1 =  (-B + Math.sqrt(delta)) / (2 * A);
X2 = (-B - Math.sqrt(delta)) / (2 * A);

console.log(delta);
console.log(X1.toFixed(5));
console.log(X2.toFixed(5));
