function division() { //sin parametros
    let numeroUno;
    let numeroDos;
    let resultado;

    numeroUno= 2;
    numeroDos= 10;

    resultado= numeroDos / numeroUno;
    return resultado;

}
/*
function divisionParametro(pnumeroUno,pnumeroDos) { //con parametros
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let resultado;
    resultado = numeroUno / numeroDos ;
    return resultado;
    
}
*/
const divisionParametro = function (pnumeroUno,pnumeroDos) { //con parametros
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let resultado;
    resultado = numeroUno / numeroDos ;

    return resultado;
    
}