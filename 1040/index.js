var input = require("fs").readFileSync("./1040/stdin", "utf8")
var lines = input.split("\n");

var notas, cont = 0, media = 0, mediaexame;
notas = lines.shift().split(" ").map(Number);
let pesos = [2, 3, 4, 1];

while (cont < 4) {
  media += notas[cont] * pesos[cont];
  cont = cont + 1;
}

media = media / 10;

if (media >= 7.0) {
  console.log("Media:", media.toFixed(1));
  console.log("Aluno aprovado.");
}
else if (media < 5.0) {
  console.log("Media:", media.toFixed(1));
  console.log("Aluno reprovado.");
}
else {
  exame = parseFloat(lines.shift("\n"));
  console.log("Media:", media.toFixed(1));
  console.log("Aluno em exame.");
  console.log("Nota do exame:", exame.toFixed(1));
  mediaexame = (exame + media) / 2;

  if (mediaexame >= 5.0) {
    console.log("Aluno aprovado.");
    console.log("Media final:", mediaexame.toFixed(1));
  }
  else{
    console.log("Aluno reprovado.");
    console.log("Media final:", mediaexame.toFixed(1));
  }
}






