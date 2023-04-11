var input = require("fs").readFileSync("./1019/stdin", "utf8")
var lines = input.split("\n");

let resto = 0; segundos = 0, horas = 0, minutos = 0; 
segundos = parseInt(lines.shift());


while(segundos > 60){
    if (segundos >= 3600){
        horas = horas + 1;
        console.log(horas);
    }
    segundos = segundos - 1;
}

segundos = segundos * 60

console.log(horas, minutos, segundos);
