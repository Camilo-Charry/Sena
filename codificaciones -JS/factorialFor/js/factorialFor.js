function factorialFor() {
    var numero;
var contador;
var factorial;

factorial=1;
numero=5;
    console.log("Sin parametros")
for (contador= 1; contador<=numero;  contador++) {
    factorial= factorial * contador;

    console.log("resultado: "+contador,"*"+contador,"="+factorial);
    
}
}
const factorialForParametros = function (pnumeroUno,) {
    var numero;
    numero = pnumeroUno;
var contador;
var factorial;

factorial=1;
console.log("Con parametros")
for (contador= 1; contador<=numero;  contador++) {
    factorial= factorial * contador;

    console.log("resultado: "+contador,"*"+contador,"= "+factorial);
    
}
}
