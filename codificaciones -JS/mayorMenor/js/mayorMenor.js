function menorMayor() { //sin parametros
    let numeroUno;
    let numeroDos;

    numeroUno= 2;
    numeroDos= 10;
    
    if (numeroUno>numeroDos) {
        return numeroUno+" es mayor que "+numeroDos;
    } else {
        return numeroDos+" es mayor que "+numeroUno;
    }

}

const menorMayorParametro = function (pnumeroUno, pnumeroDos) {
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;

    if (numeroUno > numeroDos) {
        return numeroUno + " es mayor que " + numeroDos;
    } else {
        return numeroDos + " es mayor que " + numeroUno;
    }
}
