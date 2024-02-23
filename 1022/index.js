const { Console } = require("console");

var input = require("fs").readFileSync("./1022/stdin", "utf8");
var lines = input.split("\n");

var N, N1, N2, D1, D2, DIV, RAC, R1, R2, CONT;

N = lines.shift().split(" ");
N1 = parseInt(N[0]);
D1 = parseInt(N[2]);
N2 = parseInt(N[4]);
D2 = parseInt(N[6]);

if(N[3] === "+"){
    DIV = (N1*D2) + (N2*D1);
    while(cont === 1){
        while (parseInt(DIV) == parseFloat(DIV)){
            DIV = DIV / 2;
            DIV = DIV;
            
            //console.log(DIV);
            if (parseInt(DIV) != parseFloat(DIV)){
                RAC = (DIV * 2);
            }
        }
    }

    //console.log((N1*D2) + (N2*D1)+"/"+(D1*D2),"=",RAC1+"/"+((D1*D2))/2);
}
else if (N[3] === "-"){
    console.log((N1*D2 - N2*D1)+"/"+(D1*D2),"=",(N1*D2 - N2*D1)/2+"/"+(D1*D2)/2);
}
else if (N[3] === "*"){
    console.log(((N1*N2))+"/"+(D1*D2),"=",(N1*N2)/2+"/"+(D1*D2)/2);
}else if (N[3] === "+"){

}

//Soma: (N1*D2 + N2*D1) / (D1*D2)
//Subtração: (N1*D2 - N2*D1) / (D1*D2)
//Multiplicação: (N1*N2) / (D1*D2)
//Divisão: (N1/D1) / (N2/D2), ou seja (N1*D2)/(N2*D1)