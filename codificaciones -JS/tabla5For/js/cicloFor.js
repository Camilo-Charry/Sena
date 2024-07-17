function multiplicacionFor() {
    var numero;
var multiplicacion;
var resultado;

numero=5;
    console.log("Sin parametros")
for (multiplicacion= 1; multiplicacion<=numero;  multiplicacion++) {
    resultado=multiplicacion * numero;
    console.log("resultado: "+numero,"*"+multiplicacion,"="+resultado);
    
}
}

const multiplicacionForParametros = function (pnumeroUno) {
    var numero;
    numero =pnumeroUno;
    var multiplicacion;
    var resultado;

    console.log("Con parametros")
for (multiplicacion= 1; multiplicacion<=numero;  multiplicacion++) {
    resultado=multiplicacion * numero;
    console.log("resultado: "+numero,"*"+multiplicacion,"="+resultado);
    
}
    
}
