var input = require("fs").readFileSync("./1021/stdin", "utf8")
var lines = input.split("\n");

let cash = parseFloat(lines.shift());
let contnotas = 0, contmoedas = 0;
let notas = [100, 50, 20, 10, 5, 2];
let moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.009];

console.log("NOTAS:");
notas.forEach(element => {
    while(cash >= element){
        contnotas += 1; 
        cash = cash - element;
    }
    console.log(contnotas,"nota(s) de R$",element.toFixed(2));
    contnotas = 0;
});
console.log("MOEDAS:");
moedas.forEach(element => {
    while(cash >= element ){ // 0.01
        contmoedas += 1; 
        cash = cash - element;  
    }
    console.log(contmoedas,"moeda(s) de R$",element.toFixed(2));
    //console.log("exibição do cash:", cash);
    contmoedas = 0;
});


