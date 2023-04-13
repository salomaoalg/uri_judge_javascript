var input = require("fs").readFileSync("./1020/stdin", "utf8")
var lines = input.split("\n");

let dias = 0, ano = 0; mes = 0;
dias = parseInt(lines.shift());

while (dias > 0) {
    if (dias >= 365) {
        ano = ano + 1;
        dias = dias - 365;
    }
    else if (dias >= 30) {
        mes = mes + 1
        dias = dias - 30;
    }
    else {
        break;
    }
}

console.log(ano,"ano(s)");
console.log(mes,"mes(es)");
console.log(dias,"dia(s)");



