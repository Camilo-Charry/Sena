const multiplicacionForparametros = function(pnumeroUno) {
        let numero 
        numero =pnumeroUno;
        let multiplicacion;
        let resultado;

        console.log("Con parametros")
    
    for (multiplicacion = 1; multiplicacion < numero; multiplicacion++) {
        resultado = multiplicacion * numero;
        console.log("resultado:" +numero,"*" +multiplicacion,"="+resultado);
        
    }

}