/*
function contador() {//sin parametros

    let numero;
    let contador;
  
    numero=5;
    contador=0;
    console.log("sin parametros");
    while (contador<numero) {
        contador=contador +1;
        console.log("resultado: "+contador);
    
    }
}
*/
/*
const contadorParametros = function (pnumeroUno) {
    let numero;
    let contador;
    numero = pnumeroUno;
    contador = 0;
    console.log("Con parámetros while");
    while (contador < numero) {
        contador = contador + 1;
        console.log("resultado: " + contador);
    }
    return contador;
}
 const cicloForParametros = function (pnumeroUno) {
    var numero;
    numero = pnumeroUno;
    var contador;
     console.log("Con parametros for");
    for (contador= 1; contador<=numero; contador++){
        console.log("resultado: "+contador);
}
return contador;
}
*/

const contadorCombinado = function (pnumeroUno) {
    let numero = pnumeroUno;
    let contador = 0;
    let resultados;

    // Ciclo while con parámetros
    resultados = " Con parámetros while\n";
    while (contador < numero) {
        contador = contador + 1;
        resultados += "resultado: " + contador + "\n";
    }

    // Ciclo for con parámetros
    resultados += "Con parámetros For\n";
    for (contador = 1; contador <= numero; contador++) {
        resultados += "resultado: " + contador + "\n";
    }

    return resultados;
}

