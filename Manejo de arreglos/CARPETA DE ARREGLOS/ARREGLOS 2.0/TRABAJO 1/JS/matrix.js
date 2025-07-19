//ARREGLO
let arregloNumero = [];
let arregloFrutas = [];
let iteracion;
let sizeArrayNumero;
let sizeArrayfrutas;

arregloNumero = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];
arregloFrutas = ['Mora','Fresa','Papaya','Limón','Naranja','Melon'];

sizeArrayNumeros = arregloNumero.length;
sizeArrayfrutas = arregloFrutas.length;

console.log("Arreglo de Numeros: "+ arregloNumero);
console.log("Arreglo de Frutas: "+arregloFrutas);

console.log("Mostrar Fruta: "+arregloFrutas [5]);
console.log("Mostrar Numero: "+ arregloNumero[12]);

for(iteracion=0; iteracion<sizeArrayNumeros; iteracion++){
    console.log("Numeros: "+iteracion+": "+arregloNumero[iteracion]);
}

//MATRIZ
let matriz = [];

matriz = [
    [2,3,4,5],
    [0,8,7],
    [1,5,7,8,9]
];
let sizeArrayMatriz
sizeArrayMatriz = matriz.length;

console.log("MATRIZ");
console.log(matriz);


for(interacion = 0;interacion<sizeArrayMatriz;interacion++){
    console.log(""+interacion+","+matriz[interacion]);
}