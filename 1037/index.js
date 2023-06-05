var input = require("fs").readFileSync("./1037/stdin", "utf8")
var lines = input.split("\n");
          // 0   1   2   3   4   5   6   7
let inter = [0, 25, 25, 50, 50, 75, 75, 100];
var ent = parseFloat(lines.shift());


if (ent === inter[0] || ent <= inter[1] && ent > 0){
    console.log("Intervalo [0,25]");
}
else if(ent === inter[2] || ent <= inter[3] && ent > 0){
    console.log("Intervalo (25,50]");
}
else if(ent === inter[4] || ent <= inter[5] && ent > 0){
    console.log("Intervalo (50,75]");
}
else if(ent === inter[6] || ent <= inter[7] && ent > 0){
    console.log("Intervalo (75,100]");
}
else{
    console.log("Fora de intervalo");
}

//console.log(ent);