function tabla9() { //sin parametros
    let numero;
    let contador;
    let tabla;
    let multiplicar;

    tabla=9;
    numero=5;
    contador=0;

    while (contador<numero) {
        contador=contador +1;
        multiplicar= tabla *contador;
        if (multiplicar%2==0) {
            console.log("El resultado es par: " + multiplicar);
        } else {
            console.log("El resultado no es par: " + multiplicar);
        }

        console.log("resultado: "+tabla,"*"+contador,"="+multiplicar);
    }
}
const tabla9Parametros = function (pnumeroUno,ptabla) { //Con parametros
    let numero;
        numero =pnumeroUno;
    let contador;
    let tabla;
         tabla = ptabla;
    let multiplicar;
    contador=0;

    while (contador<numero) {
        contador=contador +1;
        multiplicar= tabla *contador;
        if (multiplicar%2==0) {
            console.log("El resultado es par: " + multiplicar);
        } else {
            console.log("El resultado no es par: " + multiplicar);
        }
        console.log("resultado: "+tabla,"*"+contador,"="+multiplicar);
    }
}