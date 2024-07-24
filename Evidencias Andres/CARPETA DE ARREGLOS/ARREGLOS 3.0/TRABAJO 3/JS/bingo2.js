let bingo =[];
let iteracion1;
let iteracion2;
let contador=0;
let tabla;
let contadorPar=0;
let contadorImpares=0;

console.log("BINGO");
for (let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
  let iterno=[];
    for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        contador=contador+1;
        tabla=contador*3;
        iterno.push(tabla);    
    }
    bingo.push(iterno);
}
console.log(bingo);


console.log("X1");
for (let iteracion1 = 0; iteracion1 < 4; iteracion1++) {
    for (let iteracion2 = 1; iteracion2 < 4; iteracion2++) {
      if (iteracion1%2==0&&iteracion2%2==1){
        console.log(bingo[iteracion1][iteracion2]);
      }else if (iteracion1%2==1&&iteracion2%2==0){
        console.log(bingo[iteracion1][iteracion2]);
      }else{
        console.log("")
      }
    }
  }
  
console.log("X2");
for (let iteracion1 = 2; iteracion1 < 5; iteracion1++) {
  for (let iteracion2 = 0; iteracion2 < 3; iteracion2++) {
    if (iteracion1%2==0&&iteracion2%2==0){
      console.log(bingo[iteracion1][iteracion2]);
    }else if (iteracion1%2==1&&iteracion2%2==1){
      console.log(bingo[iteracion1][iteracion2]);
    }else{
      console.log("")
    }
  }
}
console.log("X3");
for (let iteracion1 = 2; iteracion1 < 5; iteracion1++) {
  for (let iteracion2 = 2; iteracion2 < 5; iteracion2++) {
    if (iteracion1%2==0&&iteracion2%2==1){
      console.log(bingo[iteracion1][iteracion2]);
    }else if (iteracion1%2==1&&iteracion2%2==0){
      console.log(bingo[iteracion1][iteracion2]);
    }else{
      console.log("")
    }
  }
}

console.log("X central:");
for(let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    for(let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        if(iteracion1 == iteracion2 || iteracion1 + iteracion2 == 4) {
            console.log(bingo[iteracion1][iteracion2]);
        }
    }
}
console.log("final");



for (let iteracion1= 0;  iteracion1< 5; iteracion1++) {
    for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        if (bingo[iteracion1][iteracion2]%2==0) {
            contadorPar=contadorPar+1;
        } else {
            contadorImpares=contadorImpares+1;
        }
    }
}
console.log(contadorPar+"pares");
console.log(contadorImpares+"impares");