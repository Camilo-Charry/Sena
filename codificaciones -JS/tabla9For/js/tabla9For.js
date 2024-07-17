function tabla9For() {
   
    var numero;
        let contador;
        let tabla;
        let multiplicacion;
        

        tabla=9;
        numero=5;

            console.log("Sin parametros")
        for (contador=1; contador<=numero; contador++) {
            
            multiplicacion= tabla * contador;

            if (multiplicacion %2==0) {
                console.log(tabla+"x"+contador+"="+multiplicacion+" Es numero par")
            } 
            else {
                console.log(tabla+"x"+contador+"="+multiplicacion+" Es numero impar")
            }  
        }   
}

function tabla9ForParametros(pnumeroUno,ptabla) {
        let numero;
        numero = pnumeroUno;
        let contador;
        let leal;
        leal = ptabla;
        let multiplicacion;
        
        for (contador=1; contador<=numero; contador++) {
            console.log("Con parametros")
            multiplicacion= leal * contador;

            if (multiplicacion %2==0) {
                console.log(leal+"x"+contador+"="+multiplicacion+" Es numero par")
            } 
            else {
                console.log(leal+"x"+contador+"="+multiplicacion+" Es numero impar")
            }  
        }   
}