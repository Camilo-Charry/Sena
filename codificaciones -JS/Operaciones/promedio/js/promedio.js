function promedio() { //sin parametros
    let numeroUno;
    let numeroDos;
    let promedio;

    numeroUno= 2;
    numeroDos= 10;
    

    promedio= (numeroDos + numeroUno)/2;
    return promedio;

}

function promedioParametro(pnumeroUno,pnumeroDos) { //con parametros
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let promedio;
    promedio= (numeroDos + numeroUno)/2;
    return promedio;
    
}