const { parse } = require("path");
const internal = require("stream");

var input = require("fs").readFileSync("./1010/stdin", "utf8")
var lines = input.split("\n");

let TOTALA, TOTAL, QTDE, VALOR, CONT = 0, DADOS, ITEM;
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

//console.log('TOTAL = R$', (SALARIO + ((VENDAS * 15)/ 100)).toFixed(2));




//var PI = 3.14159;
//var RAIO = parseFloat(lines.shift());
//var AREA =  PI * Math.pow(RAIO, 2);

//console.log('A=' + AREA.toFixed(4));

//Comando para DEPURAÇÃO/EXECUÇÃO/TESTE
//Lembrando do arquivo STDIN com slipt 
// node .\1003\script.js
