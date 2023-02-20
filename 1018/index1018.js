var input = require("fs").readFileSync("./1018/stdin", "utf8")
var lines = input.split("\n");

let CONTN = [100, 50, 20, 10, 5, 2, 1], VALOR, NOTAS = 0;

VALOR = parseInt(lines.shift());

console.log(VALOR);
CONTN.forEach(Element => {
    if (VALOR >= Element) {
        while (VALOR >= Element) {
            NOTAS = NOTAS + 1;
            VALOR = VALOR - Element;

            if (VALOR < Element) {
                console.log(NOTAS,"nota(s) de R$",Element.toFixed(2).toString().replace(".",","));
                NOTAS = 0;
            }
        }
    }
    else {
        NOTAS = 0
        console.log(NOTAS,"nota(s) de R$",Element.toFixed(2).toString().replace(".",","));
    }
});

