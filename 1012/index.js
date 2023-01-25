var input = require("fs").readFileSync("./1012/stdin", "utf8")
var lines = input.split("\n");


let A, B, C, DADOS, ARRAY;
DADOS = lines.shift();
ARRAY = DADOS.split(" ", 3);

A = parseFloat(ARRAY[0]);
B = parseFloat(ARRAY[1]);
C = parseFloat(ARRAY[2]);

console.log("TRIANGULO:",((A * C) /2).toFixed(3));
console.log("CIRCULO:",((C * C) * 3.14159).toFixed(3));
console.log("TRAPEZIO:",(((A + B) * C) / 2).toFixed(3));
console.log("QUADRADO:",(B * B).toFixed(3));
console.log("RETANGULO:",(A * B).toFixed(3));


//VETDADOS = parseInt(DADOS);
///console.log(DADOS);

//console.log(VETDADOS)
//NUMEROS = parseFloat(DADOS.split(" ", 3));


//console.log(typeof(NUMEROS));
//console.log(NUMEROS);
//console.log(TESTE);


/*let RAIO, VOLUME;

RAIO = parseInt(lines.shift());
VOLUME = (4/3.0) * 3.14159 * Math.pow(RAIO, 3);
console.log("VOLUME =",VOLUME.toFixed(3)) 

*/

/* let TOTALA, TOTAL, QTDE, VALOR, CONT = 0, DADOS, ITEM;
// CODIGO, QTDE_PEÇAS, VL_UNIT
while(CONT < 2){
    
    DADOS = lines.shift();
    ITEM = DADOS.split(" ",3);
    TOTAL = ((QTDE = parseInt(ITEM[1])) * (VALOR = parseFloat(ITEM[2])));
    CONT++;

    if (CONT == 1){
        TOTALA = TOTAL;
    }
}
console.log("VALOR A PAGAR: R$",(TOTAL + TOTALA).toFixed(2));

*/

//console.log('TOTAL = R$', (SALARIO + ((VENDAS * 15)/ 100)).toFixed(2));




//var PI = 3.14159;
//var RAIO = parseFloat(lines.shift());
//var AREA =  PI * Math.pow(RAIO, 2);

//console.log('A=' + AREA.toFixed(4));

//Comando para DEPURAÇÃO/EXECUÇÃO/TESTE
//Lembrando do arquivo STDIN com slipt 
// node .\1003\script.js
