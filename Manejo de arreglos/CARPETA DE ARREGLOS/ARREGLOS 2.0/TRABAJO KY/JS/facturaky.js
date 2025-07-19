/**
 * Ejercicio de arreglos key-valour
 * Nombre: Dsniel Bata 
 * Fecha: 15 de mayo
 * */

let factura=[];
let iteracion;
let totalpago=[];
let totalPagoProducto;


factura=[
    {codigo:1, nombreProducto:'Patilla', cantidad:4, valorUnidad:8000},
    {codigo:2, nombreProducto:'Melon', cantidad:10, valorUnidad:3000},
    {codigo:3, nombreProducto:'Papaya', cantidad:3, valorUnidad:4000},
    {codigo:4, nombreProducto:'Piña', cantidad:2, valorUnidad:5000},
    {codigo:5, nombreProducto:'Banano', cantidad:30, valorUnidad:500},
    {codigo:6, nombreProducto:'Mango', cantidad:10, valorUnidad:12000},
];

for(iteracion=0;iteracion<factura.length;iteracion++){
    totalPagoProducto=factura[iteracion].cantidad*factura[iteracion].valorUnidad;
    totalpago.push({nombre:factura[iteracion].nombreProducto,cantidad:factura[iteracion].cantidad,valorUnidad:factura[iteracion].valorUnidad,pagototal:totalPagoProducto});
    
}
console.log(totalpago)



