function numeroMayor() { //sin parametros
    let numeroUno;
    let numeroDos;
    let numeroTres;

    numeroUno= 2;
    numeroDos= 10;
    numeroTres = 8;

    console.log("numero uno: "+numeroUno,"numero Dos: " +numeroDos,"nuemro tres: "+numeroTres)
    
    if (numeroUno>numeroDos & numeroUno>numeroTres) {
        console.log("es mayor numero uno "+numeroUno);
    } else {
        if (numeroDos>numeroUno & numeroDos>numeroTres) {
            console.log(" es mayor numero dos "+numeroDos);
        } else {
            console.log("Es mayor numero tres "+numeroTres);
        }
    }
    
}
const numeroMayorParametro = function (pnumeroUno, pnumeroDos, pnumeroTres) {
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let numeroTres = pnumeroTres;
    console.log("Número uno: " + numeroUno, "Número Dos: " + numeroDos, "Número tres: " + numeroTres);

    if (numeroUno > numeroDos && numeroUno > numeroTres) {
        console.log(numeroUno + " es mayor que " + numeroDos);
    } else {
        if (numeroDos > numeroUno && numeroDos > numeroTres) {
            console.log("Número dos es mayor: " + numeroDos);
        } else {
            console.log("Número tres es mayor: " + numeroTres);
        }
    }

    return numeroUno; 
}
