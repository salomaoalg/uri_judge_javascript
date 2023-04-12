var input = require("fs").readFileSync("./1019/stdin", "utf8")
var lines = input.split("\n");

let resto = 0; segundos = 0, horas = 0, minutos = 0; 
segundos = parseInt(lines.shift());
var tempo = [], cont = 0;

while(segundos >= 60){
    if (segundos >= 3600){
        horas = horas + 1;
        segundos = segundos -3600;
    }
    else{
        minutos = minutos + 1;
        segundos = segundos - 60;
    }
}
tempo[0] = horas.toString();
tempo[1] = minutos.toString();
tempo[2] = segundos.toString();

while(cont < tempo.length){
    tempo = tempo.push(':')
    cont = cont + 1; 
    console.log(tempo[cont]);
}




