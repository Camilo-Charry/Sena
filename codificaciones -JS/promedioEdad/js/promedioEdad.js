function promedioEdad() { //sin parametros
    let edadUno;
    let edadDos;
    let edadTres;
    let actualAño;
    let promedio;

    actualAño = 2024;
        m= 2007;
        j= 2006;
        k=2005;

        edadUno= actualAño - m;
        edadDos= actualAño - j;
        edadTres= actualAño - k;
        promedio= (edadUno + edadDos + edadTres)/3;

        if (edadUno,edadDos,edadTres>18) {
            console.log("Es mayor edad: " +edadUno);
            console.log("Es mayor de edad: " +edadDos);
            console.log("Es mayor de edad: " +edadTres);
        } else {
            console.log("No son mayores de edad");
        }

        if (promedio>18) {
            return("El promedio de edad es mayor: " +promedio);
        } else {
            return("El promedio de edad no es mayor: " +promedio);
        }   
}

const promedioEdadParametros = function (pfecha1, pfecha2, pfecha3) {
    let actualAño = 2024;
    let fechaUno = pfecha1;
    let fechaDos = pfecha2;
    let fechaTres = pfecha3;
    let edadUno;
    let edadDos;
    let edadTres;
    let promedio;

    edadUno = actualAño - fechaUno;
    edadDos = actualAño - fechaDos;
    edadTres = actualAño - fechaTres;

    promedio = (edadUno + edadDos + edadTres) / 3;

    if (edadUno > 18 && edadDos > 18 && edadTres > 18) {
        console.log("Es mayor de edad " + edadUno);
        console.log("Es mayor de edad " + edadDos);
        console.log("Es mayor de edad " + edadTres);
    } else {
        console.log("No son mayores de edad");
    }

    if (promedio > 18) {
        console.log("El promedio de edad es mayor: " + promedio);
    } else {
        console.log("El promedio de edad no es mayor a 18");
    }
    return promedio; 
}


