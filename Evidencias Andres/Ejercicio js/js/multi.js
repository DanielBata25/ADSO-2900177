
/**
   * tabla del multiplicar con areglo y diseñodel
   * Autor: Juan David Artunduaga Gomez
   * sabado 13 de Julio 2024
   */

document.addEventListener('DOMContentLoaded', function(){
    let tablas = []; /*hasta que tabla quiere contar*/ 
    let multiplo = [] /*hasta que numero quere multiplicar*/
    let interacionTabla;
    let interacionMultiplo;
    let resultado;
    let numeroTabla;
    let numeroMultiplo;
    let printResultado = "";



    for (interacionTabla=0;interacionTabla<5;interacionTabla++){
        multiplo=[];
        numeroTabla = interacionTabla + 1;
        for(interacionMultiplo=0;interacionMultiplo<10;interacionMultiplo++){
            numeroMultiplo = interacionMultiplo + 1;
            resultado = numeroTabla * numeroMultiplo;
            multiplo.push(resultado) 
        }
        tablas.push(multiplo)
    }
    for (interacionTabla=0;interacionTabla<tablas.length; interacionTabla ++){
        numeroTabla = interacionTabla + 1;
        printResultado +='<div class="accordion-item">';
        printResultado +='<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne'+ interacionTabla + 1 +'" aria-expanded="true" aria-controls="collapseOne">'
        printResultado += 'Tabla de Multiplicar #' + numeroTabla;
        printResultado += '</button>';
        printResultado += '<div id="collapseOne'+ interacionTabla + 1 +'" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">'
        printResultado += '<div class="accordion-body" style= "padding: 0 !important;">'
        printResultado += '<table class="table">';
        for(interacionMultiplo=0;interacionMultiplo<10;interacionMultiplo++){
            numeroMultiplo = interacionMultiplo + 1;

            printResultado += '<tr style="padding:0;margin:0;"><td style="padding:0;margin:0;">' +numeroTabla + 'X' + numeroMultiplo + '=' + tablas[interacionTabla][interacionMultiplo] + '</td></tr>';
        }
        printResultado += '</table>';
        printResultado += '</div>'
        printResultado +='</div>';
        printResultado +='</div>';
    }
    // console.log(printResultado);
    document.getElementById('accordionExample').innerHTML = printResultado


});