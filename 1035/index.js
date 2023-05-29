var input = require("fs").readFileSync("./1035/stdin", "utf8")
var lines = input.split("\n");

let letras, entrada,A,B,C,D;
entrada = lines.shift();
letras = entrada.split(" ").map(Number); // ARRAY DE ELEMENTOS CONVERTIDO

A = letras[0];
B = letras[1];
C = letras[2];
D = letras[3];

console.log(A,B,C,D);

if(B > C && D > A && (C + D) > (A + B)){
    if(A % 2 == 0){
        console.log("Valores aceitos")
    }
    else{
        console.log("Valores nao aceitos")
    }
}
else{
    console.log("Valores nao aceitos")
}


/*
if (letras[1] > letras[2] && letras[3] > letras[0]){
    if((letras[2] + letras[3]) > (letras[0] + letras[1]) && (letras[2] + letras[3]) > (letras[2] + letras[3])){
       if(letras[0] % 2 == 0){
            console.log("Valores aceitos");
       }
    }
}
else{
    console.log("aqui!!");
}

*/
