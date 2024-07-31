/*let bingo = [];
let resultado = [];
let contador = [];
let tablaM = 3;
let pantalla = "";

for(let iterador = 0; iterador<5; iterador++) {
  resultado = [];
  for (let iterador2 = 0; iterador2<5; iterador2++) {
    contador++;
    let multiplicaciones = tablaM * contador;


    resultado.push(multiplicaciones);
  }
  
  bingo.push(resultado);
}

for(let iterador = 0; iterador<bingo.length; iterador++) {
  pantalla+=`<div class="row">`;
  for(let iterador2 = 0; iterador2<bingo[iterador].length; iterador2++) {
    pantalla+= `<div class="col-2">${bingo[iterador][iterador2]}</div>`
  }
  pantalla+= `</div>`;

}
document.getElementById('bingo').innerHTML = pantalla;
*/

let bingo = [];
let interno = [];
let interacion1;
let interacion2;
let contador = 1;
let tabla;
let printResultado = ''


// operacion del bingo
for (interacion1 = 0; interacion1 < 5; interacion1++) {
    interno = [];
    for (interacion2 = 0; interacion2 < 5; interacion2++) {
        contador = contador + 1;
        tabla = contador * 3;
        interno.push(tabla);
    }
    bingo.push(interno);
}

//boton para otros bingos 
printResultado += '<div class="btn-group" role="group" aria-label="Basic example">'
printResultado += '<button type="button" class="btn btn-primary" id="columna1">Fila 1</button>'
printResultado += '<button type="button" class="btn btn-primary" id="columna2">Fila 2</button>'
printResultado += '<button type="button" class="btn btn-primary" id="columna3">Fila 3</button>'
printResultado += '<button type="button" class="btn btn-primary" id="columna4">Fila 4</button>'
printResultado += '<button type="button" class="btn btn-primary" id="columna5">Fila 5</button>'
printResultado += '<button type="button" class="btn btn-primary" id="xGrande">xGrand</button>'
printResultado += '<button type="button" class="btn btn-primary" id="xPequeña">xPequeña</button>'
printResultado += '<button type="button" class="btn btn-primary" id="x2Pequeña">x2Peuqeña</button>'
printResultado += '</div>'



// estructura del bingo
printResultado += '<table class="table">'
printResultado += '<thead>'
printResultado += '<tr>'
printResultado += ` <th >B</th>
                    <th >I</th>
                    <th >N</th>
                    <th >G</th>
                    <th >O</th>`
printResultado += '</tr>'
printResultado += '</thead>'
printResultado += ' <tbody>'
for (interacion1 = 0; interacion1 < 5; interacion1++) {
    printResultado += '<tr>'

    for (interacion2 = 0; interacion2 < 5; interacion2++) {
   


        if (interacion2 == 0) {
            printResultado += '<td class="cambio1 celda-numeros celda-numeros2 celda-numeros3">' + bingo[interacion1][interacion2] + '</td>'
        } else if (interacion2 == 1) {
            printResultado += '<td class="cambio2 celda-numeros celda-numeros2 celda-numeros3">' + bingo[interacion1][interacion2] + '</td>'
        } else if (interacion2 == 2) {
            printResultado += '<td class="cambio3 celda-numeros celda-numeros2 celda-numeros3">' + bingo[interacion1][interacion2] + '</td>'
        } else if (interacion2 == 3) {
            printResultado += '<td class="cambio4 celda-numeros celda-numeros2 celda-numeros3">' + bingo[interacion1][interacion2] + '</td>'
        } else {
            printResultado += '<td class="cambio5 celda-numeros celda-numeros2 celda-numeros3">' + bingo[interacion1][interacion2] + '</td>'
        }
    }
    printResultado += '</tr>'
}
printResultado += ' </tbody>'
printResultado += '</table>'


document.getElementById("bingo").innerHTML = printResultado

// boton de fila 1
let button1 = document.getElementById('columna1')
button1.addEventListener("click", () => { //funcion anonima
    let cambio1 = document.querySelectorAll(".cambio1")///traigo todos los td que considian con la clase
    cambio1.forEach((Element) => {
        Element.style.color = "white"
        Element.style.background = "blue"
        Element.style.transition = "all 2s ease"
    })
    let cambio2 = document.querySelectorAll(".cambio2")
    cambio2.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio3 = document.querySelectorAll(".cambio3")
    cambio3.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio4 = document.querySelectorAll(".cambio4")
    cambio4.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio5 = document.querySelectorAll(".cambio5")
    cambio5.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
})

// boton de fila 2
let button2 = document.getElementById('columna2')
button2.addEventListener("click", () => {
    let cambio2 = document.querySelectorAll(".cambio2")
    cambio2.forEach((Element) => {
        Element.style.color = "white"
        Element.style.background = "#41b"
        Element.style.transition = "all 2s ease"
    })
    let cambio1 = document.querySelectorAll(".cambio1")
    cambio1.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio3 = document.querySelectorAll(".cambio3")
    cambio3.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio4 = document.querySelectorAll(".cambio4")
    cambio4.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio5 = document.querySelectorAll(".cambio5")
    cambio5.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
})

// boton de fila 3
let button3 = document.getElementById('columna3')
button3.addEventListener("click", () => {
    let cambio3 = document.querySelectorAll(".cambio3")
    cambio3.forEach((Element) => {
        Element.style.color = "white"
        Element.style.background = "blue"
        Element.style.transition = "all 2s ease"
    })
    let cambio1 = document.querySelectorAll(".cambio1")
    cambio1.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio2 = document.querySelectorAll(".cambio2")
    cambio2.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio4 = document.querySelectorAll(".cambio4")
    cambio4.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio5 = document.querySelectorAll(".cambio5")
    cambio5.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
})

// boton de fila 4
let button4 = document.getElementById('columna4')
button4.addEventListener("click", () => {
    let cambio4 = document.querySelectorAll(".cambio4")
    cambio4.forEach((Element) => {
        Element.style.color = "white"
        Element.style.background = "#41b"
        Element.style.transition = "all 2s ease"
    })
    let cambio1 = document.querySelectorAll(".cambio1")
    cambio1.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio2 = document.querySelectorAll(".cambio2")
    cambio2.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio3 = document.querySelectorAll(".cambio3")
    cambio3.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio5 = document.querySelectorAll(".cambio5")
    cambio5.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
})

// boton de fila 5
let button5 = document.getElementById('columna5')
button5.addEventListener("click", () => {
    let cambio5 = document.querySelectorAll(".cambio5")
    cambio5.forEach((Element) => {
        Element.style.color = "white"
        Element.style.background = "#41b"
        Element.style.transition = "all 2s ease"
    })
    let cambio1 = document.querySelectorAll(".cambio1")
    cambio1.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio2 = document.querySelectorAll(".cambio2")
    cambio2.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio3 = document.querySelectorAll(".cambio3")
    cambio3.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio4 = document.querySelectorAll(".cambio4")
    cambio4.forEach((Element) => {
        Element.style.color = "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
})

let xGrande =[];
let xPequeña =[];
let x2Pequeña =[];


//Grande
for(let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
  for(let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
      if(iteracion1 == iteracion2 || iteracion1 + iteracion2 == 4) {
          xGrande.push(bingo[iteracion1][iteracion2]);
      }
  }
}
let btnxGrande = document.getElementById("xGrande");
let celdaNumeros = document.querySelectorAll(".celda-numeros");

btnxGrande.addEventListener("click", () =>{

    xGrande.forEach(number => {
        celdaNumeros.forEach(element =>{
        
            let bingoNumber = element.textContent;
         
            if(bingoNumber == number){
                element.style.color = "#000"
                element.style.background = "red"
                element.style.transition = "all 2s ease"
            }
        })
    })
})

//xPEQUEÑA
for (let iteracion1 = 2; iteracion1 < 5; iteracion1++) {
  for (let iteracion2 = 0; iteracion2 < 3; iteracion2++) {
    if (iteracion1%2==0&&iteracion2%2==0){
      xPequeña.push(bingo[iteracion1][iteracion2]);
    }else if (iteracion1%2==1&&iteracion2%2==1){
      xPequeña.push(bingo[iteracion1][iteracion2]);
    }else{
      xPequeña.push("")
    }
  }
}
  let btnxPequeña = document.getElementById("xPequeña");
  let celdaNumeros2 = document.querySelectorAll(".celda-numeros2");
  
  btnxPequeña.addEventListener("click", () =>{
  
      xPequeña.forEach(number => {
          celdaNumeros2.forEach(element =>{
          
              let bingoNumber = element.textContent;
           
              if(bingoNumber == number){
                  element.style.color = "#000"
                  element.style.background = "green"
                  element.style.transition = "all 2s ease"
              }
          })
      })
  })
  
//x2Pequeña
  for (let iteracion1 = 2; iteracion1 < 5; iteracion1++) {
    for (let iteracion2 = 2; iteracion2 < 5; iteracion2++) {
      if (iteracion1%2==0&&iteracion2%2==0){
        x2Pequeña.push(bingo[iteracion1][iteracion2]);
      }else if (iteracion1%2==1&&iteracion2%2==1){
        x2Pequeña.push(bingo[iteracion1][iteracion2]);
      }else{
        x2Pequeña.push("")
      }
    }
  }
    let btnx2Pequeña = document.getElementById("x2Pequeña");
    let celdaNumeros3 = document.querySelectorAll(".celda-numeros3");
    
    btnx2Pequeña.addEventListener("click", () =>{
    
        x2Pequeña.forEach(number => {
            celdaNumeros3.forEach(element =>{
            
                let bingoNumber = element.textContent;
             
                if(bingoNumber == number){
                    element.style.color = "#000"
                    element.style.background = "pink"
                    element.style.transition = "all 2s ease"
                }
            })
        })
    })
    
  
