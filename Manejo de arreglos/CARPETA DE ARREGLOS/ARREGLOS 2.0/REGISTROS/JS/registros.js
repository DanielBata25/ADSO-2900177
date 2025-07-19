/**
 * Ejercicio de arreglos key-valour- REGISTROS
 * Nombre: Daniel Bata 
 * Fecha: 15 de mayo
 * */

let Nomina=[];
let iteracion;
let sueldo=[];
let pago;


Nomina=[
    { Id:1, Nombre:'Daniel', Apellidos:'Bata', Cedula:1075231110, Edad:17, Estracto:2, ValorDia: 50000, diasTrabajando:30 },
    { Id:2, Nombre:'Juan', Apellidos:'Artuduanga', Cedula:1075231111, Edad:19, Estracto:2, ValorDia: 45000, diasTrabajando:30},
    { Id:3, Nombre:'Esteban', Apellidos:'Palomar', Cedula:1075231112, Edad:18, Estracto:2, ValorDia: 4000, diasTrabajando:30},
    { Id:4, Nombre:'Felipe', Apellidos:'Tovar', Cedula:1075231113, Edad:17, Estracto:2, ValorDia: 50000, diasTrabajando:30},
    { Id:5, Nombre:'Juan', Apellidos:'Guerrero', Cedula:1075231114, Edad:18, Estracto:2, ValorDia: 45000, diasTrabajando:30},
    { Id:6, Nombre:'Maria', Apellidos:'Tovar', Cedula:1075231115, Edad:17, Estracto:2, ValorDia: 50000, diasTrabajando:30},
    { Id:7, Nombre:'Camilo', Apellidos:'Losada', Cedula:1075231116, Edad:17, Estracto:2, ValorDia: 45000, diasTrabajando:30},
    { Id:8, Nombre:'Marcos', Apellidos:'Rojas', Cedula:1075231117, Edad:17, Estracto:2, ValorDia: 40000, diasTrabajando:30},
    { Id:9, Nombre:'Mauricio', Apellidos:'Noscue', Cedula:1075231118, Edad:17, Estracto:2, ValorDia: 50000, diasTrabajando:30},
    { Id:10, Nombre:'Isabella', Apellidos:'Carrera', Cedula:1075231119, Edad:17, Estracto:2, ValorDia: 45000, diasTrabajando:30},
];

for(iteracion=0;iteracion<Nomina.length;iteracion++){
    pago=Nomina[iteracion].ValorDia*Nomina[iteracion].diasTrabajando;
    sueldo.push({Nombre:Nomina[iteracion].Nombre,Apellidos:Nomina[iteracion].Apellidos,ValorDia:Nomina[iteracion].ValorDia,sueldo:pago});
    
}
console.log(sueldo)
