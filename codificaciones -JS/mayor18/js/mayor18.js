function edadMayor() { //sin parametros
    let edadUno;
    
    let actualAño;

    actualAño = 2024;
    m= 2007;

        edadUno= actualAño - m;

        if (edadUno>18) {
            console.log("Es mayor edad uno: " +edadUno);
        } else {
            console.log("no es mayor de edad: " +edadUno);
        }
}

const edadMayorParametros = function (pfecha1) { //con parametros
    let actualAño = 2024;
    let fechaUno = pfecha1;
    let edadUno;


     edadUno= actualAño - fechaUno; 

     if (edadUno>18) {
        console.log("es mayor edad: "+edadUno);
    } else {
        console.log("No es mayor de edad: "+edadUno); 
    }
}