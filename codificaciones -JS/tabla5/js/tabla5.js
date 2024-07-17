function tabla5() {//sin parametros
         let numero;
         let contador;
         let multiplicar;

         numero=5;
         contador=0;

         while (contador<numero) {
                contador =contador +1;
                multiplicar= numero * contador
             
             console.log("resultado: "+numero,"*"+contador,"="+multiplicar);
             }
}
const tabla5Parametros = function (pnumeroUno) { //Con parametros
    let numero;
    let contador;
    let multiplicar;

    numero=pnumeroUno;
    contador=0;

    while (contador<5) {
        contador =contador +1;
        multiplicar= numero * contador
        
        console.log("resultado: "+numero,"*"+contador,"="+multiplicar);
        }
}