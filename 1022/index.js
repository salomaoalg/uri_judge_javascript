var input = require("fs").readFileSync("./1022/stdin", "utf8");
var lines = input.split("\n");

var N, N1, N2, D1, D2;

N = lines.shift().split(" ");
N1 = N[0];
D1 = N[2];
N2 = N[4];
D2 = N[6];

if(N[3] === "+"){
    console.log((N1*D2) + (N2*D1)+"/"+(D1*D2),"=",((N1*D2) + (N2*D1))/2+"/"+((D1*D2))/2);
}
else if (N[3] === "-"){
    console.log((N1*D2 - N2*D1)+"/"+(D1*D2))
}
else if (N[3] === "+"){
    
}else if (N[3] === "+"){
    
}

//Soma: (N1*D2 + N2*D1) / (D1*D2)
//Subtração: (N1*D2 - N2*D1) / (D1*D2)
//Multiplicação: (N1*N2) / (D1*D2)
//Divisão: (N1/D1) / (N2/D2), ou seja (N1*D2)/(N2*D1)