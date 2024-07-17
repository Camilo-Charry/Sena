function buzzbass() {
    var tabla;
        var multiplicar; 

        var par;
        var impar;
        var mod;
        
        var iTabla;
        var iMultiplicar;

        var resultado;

        tabla= 5;
        multiplicar=5;

        par=0;
        impar=0;

        iTabla=0

        while(iTabla<tabla){
            iTabla++
            console.log("\n\n"+"Tabla del "+ iTabla+"\n\n")
            iMultiplicar=0

            while(iMultiplicar<multiplicar ){
                iMultiplicar++
                resultado=iTabla * iMultiplicar;
                if(resultado %2==0){
                    par++
                    mod= "buzz"
                }
                else{
                    impar++
                    mod= "bass"
                }
                console.log(iTabla+"x"+iMultiplicar+"="+resultado+" "+mod)
            }
        }
      
        return("Total de impares: "+impar+" Total de pares: "+par)
}

const buzzbassParametros = function (ptabla,pnumeroUno) {
        var tabla;
        tabla = ptabla;
        var multiplicar; 
        multiplicar = pnumeroUno;

        var par;
        var impar;
        var mod;
        
        var iTabla;
        var iMultiplicar;

        var resultado;

        par=0;
        impar=0;

        iTabla=0
        

        while(iTabla<tabla){
            iTabla++
            console.log("\n\n"+"Tabla del "+ iTabla+"\n\n")
            iMultiplicar=0

            while(iMultiplicar<multiplicar ){
                iMultiplicar++
                resultado=iTabla * iMultiplicar;
                if(resultado %2==0){
                    par++
                    mod= "buzz"
                }
                else{
                    impar++
                    mod= "bass"
                }
                console.log(iTabla+"x"+iMultiplicar+"="+resultado+" "+mod)
            }
        }
        console.log("\n\n"+"Total de pares: "+par)
        console.log("Total de impares: "+impar)
}
