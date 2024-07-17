const sumarExpresion = function(pnumeroUno,pnumeroDos) {
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let resultado;
    resultado = numeroUno + numeroDos ;
    return resultado;
    10
}
const  restar = function(pnumeroUno,pnumeroDos) { //con parametros
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let resultado;
    resultado = numeroUno - numeroDos ;
    return resultado;
    0
}
const multiplicacionParametro = function (pnumeroUno,pnumeroDos) { //con parametros
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let resultado;
    resultado = numeroUno * numeroDos ;
    return resultado;
    25
}
const divisionParametro = function (pnumeroUno,pnumeroDos) { //con parametros
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let resultado;
    resultado = numeroUno / numeroDos ;

    return resultado;
    1
}
const promedioParametro = function (pnumeroUno,pnumeroDos) { //con parametros
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let promedio;
    promedio= (numeroDos + numeroUno)/2;
    return promedio;
    5
}
const operaciones = function(pnumeroUno,pnumeroDos) {
    let resultado;
    let suma = sumarExpresion(pnumeroUno,pnumeroDos)
    let restar1 = restar(pnumeroUno,pnumeroDos)
    let multiplicar = multiplicacionParametro(pnumeroUno,pnumeroDos)
    let division = divisionParametro(pnumeroUno,pnumeroDos)
    let promedio = promedioParametro(pnumeroUno,pnumeroDos)

    resultado = (suma - restar1 * multiplicar /division) /promedio;

    return  resultado;
}