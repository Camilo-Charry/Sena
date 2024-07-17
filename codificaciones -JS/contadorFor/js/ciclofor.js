function cicloFor() {
    var numero;
    var contador;

numero=5;
    console.log("Sin parametros")
for (contador= 1; contador<=numero; contador++) {
    console.log(contador);
    
}

}

const cicloForParametros = function (pnumeroUno) {
    var numero;
    numero = pnumeroUno;
    var contador;
    console.log("Con parametros")
for (contador= 1; contador<=numero; contador++) {
    console.log(contador);
    
}
}