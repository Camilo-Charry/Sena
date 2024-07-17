function factorial() {
    let numero;
    let contador;
    let factorial;

         numero=5;
        contador=0;
        factorial=1;
        console.log("sin parametros")
        while (contador<numero) {
            contador=contador +1;
            factorial=factorial * contador;
            console.log(factorial)
}
}  
const factorialParametro = function (pnumeroUno) {
    let numero;
    numero = pnumeroUno;
    let contador;
    let factorial;

        contador=0;
        factorial=1;
        console.log("con parametros") 
        while (contador<numero) {
            contador=contador +1;
            factorial=factorial * contador;
            console.log(factorial) 
}
}       