/**
 * Ejercicio de arreglos key-valour- REGISTROS
 * Nombre: Daniel Bata 
 * Fecha: 15 de mayo
 * */
let sueldoPersona = 13000;
let sueldocondescuento = 0;
let transporte = 26000;
let bono = 10000
let Nomina = [];
let iteracion;
let sueldo = [];
let pensionp = [];
let saludp = [];
let arlp = [];
let sueldoTotal = [];
let valorp = [];
let sueldo2;
let sueldo3 = [];
Nomina = [
    { Id: 1, Nombre: 'Daniel', Apellidos: 'Bata', Cedula: 1075231110, Edad: 17, Estracto: 6, ValorDia: 60000, diasTrabajando: 30 },
    { Id: 2, Nombre: 'Juan', Apellidos: 'Artuduanga', Cedula: 1075231111, Edad: 19, Estracto: 2, ValorDia: 45000, diasTrabajando: 30 },
    { Id: 3, Nombre: 'Esteban', Apellidos: 'Palomar', Cedula: 1075231112, Edad: 18, Estracto: 1, ValorDia: 4000, diasTrabajando: 30 },
    { Id: 4, Nombre: 'Felipe', Apellidos: 'Tovar', Cedula: 1075231113, Edad: 17, Estracto: 3, ValorDia: 50000, diasTrabajando: 30 },
    { Id: 5, Nombre: 'Juan', Apellidos: 'Guerrero', Cedula: 1075231114, Edad: 18, Estracto: 2, ValorDia: 45000, diasTrabajando: 30 },
    { Id: 6, Nombre: 'Maria', Apellidos: 'Tovar', Cedula: 1075231115, Edad: 17, Estracto: 1, ValorDia: 50000, diasTrabajando: 30 },
    { Id: 7, Nombre: 'Camilo', Apellidos: 'Losada', Cedula: 1075231116, Edad: 17, Estracto: 3, ValorDia: 45000, diasTrabajando: 30 },
    { Id: 8, Nombre: 'Marcos', Apellidos: 'Rojas', Cedula: 1075231117, Edad: 17, Estracto: 2, ValorDia: 40000, diasTrabajando: 30 },
    { Id: 9, Nombre: 'Mauricio', Apellidos: 'Noscue', Cedula: 1075231118, Edad: 17, Estracto: 1, ValorDia: 50000, diasTrabajando: 30 },
    { Id: 10, Nombre: 'Isabella', Apellidos: 'Carrera', Cedula: 1075231119, Edad: 17, Estracto: 2, ValorDia: 20000, diasTrabajando: 30 },
];
for (iteracion = 0; iteracion < Nomina.length; iteracion++) {
    sueldo2 = Nomina[iteracion].ValorDia * Nomina[iteracion].diasTrabajando;
    sueldo3.push({ Nombre: Nomina[iteracion].Nombre, Apellidos: Nomina[iteracion].Apellidos, Cedula: Nomina[iteracion].Cedula, Edad: Nomina[iteracion].Edad, Estracto: Nomina[iteracion].Estracto, ValorDia: Nomina[iteracion].ValorDia, pagototal: sueldo2 });

}
console.log(sueldo3)

for (let iteracion = 0; iteracion < Nomina.length; iteracion++) {

    function descuento(pvalor, psueldo, pestracto) {
        if (pvalor <= psueldo * 2) {
            pensionp.push(pension(pvalor));
            saludp.push(salud(pvalor));
            arlp.push(arl(pvalor));
            pvalor = pvalor + transporte;
            pvalor = pvalor - (pensionp[iteracion] + saludp[iteracion] + arlp[iteracion]);
            if (pestracto == 1 || pestracto == 2) {
                pvalor = pvalor + bono;
                return pvalor
            }
            else {
                pvalor = pvalor + 0;
                return pvalor

            }
        } else {
            if (pvalor >= psueldo * 4 && pvalor < psueldo * 6) {

                sueldocondescuento = pvalor * 0.03;
                pvalor = pvalor - sueldocondescuento;
                pensionp.push(pension(pvalor));
                saludp.push(salud(pvalor));
                arlp.push(arl(pvalor));
                pvalor = pvalor - (pensionp[iteracion] + saludp[iteracion] + arlp[iteracion]);

                return pvalor

            } else if (pvalor >= psueldo * 6 && pvalor < psueldo * 8) {
                sueldocondescuento = pvalor * 0.04;
                pvalor = pvalor - sueldocondescuento;
                pensionp.push(pension(pvalor));
                saludp.push(salud(pvalor));
                arlp.push(arl(pvalor));
                pvalor = pvalor - (pensionp[iteracion] + saludp[iteracion] + arlp[iteracion]);

                return pvalor

            } else if (pvalor >= psueldo * 8 && pvalor < psueldo * 8) {
                sueldocondescuento = pvalor * 0.05;
                pvalor = pvalor - sueldocondescuento;
                pensionp.push(pension(pvalor));
                saludp.push(salud(pvalor));
                arlp.push(arl(pvalor));
                pvalor = pvalor - (pensionp[iteracion] + saludp[iteracion] + arlp[iteracion]);

                return pvalor
            }
            else {
                console.log("--------------------------------")
                console.log("No se le hace ninguna retencion")
                pensionp.push(pension(pvalor));
                saludp.push(salud(pvalor));
                arlp.push(arl(pvalor));
                pvalor = pvalor - (pensionp[iteracion] + saludp[iteracion] + arlp[iteracion]);

                return pvalor
            }
        }
    }

    sueldoTotal.push(descuento(descuento(Nomina[iteracion].ValorDia * Nomina[iteracion].diasTrabajando), sueldoPersona, Nomina[iteracion].Estracto));
    console.log(`El sueldo de ${Nomina[iteracion].Nombre} es de ${sueldoTotal[iteracion]}`);


}

function pension(psueldo) {
    return psueldo * 0.16;
}

function salud(psueldo) {
    return psueldo * 0.12;
}

function arl(psueldo) {
    return psueldo * 0.052;
}











