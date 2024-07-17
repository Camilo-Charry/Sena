function edadpromedio() { //sin parametros
    let edadUno;
    let edadDos;
    let edadTres;
    let promedio;
    let actualAño;

    actualAño = 2024;
    m= 2007;
    j= 2006;
    f= 2003;
        edadUno= actualAño - m;
        edadDos= actualAño -j;
        edadTres= actualAño -f;  
        promedio= (edadUno + edadDos + edadTres)/3;
      
        console.log(" sin parametros" +edadUno,+edadDos,+edadTres);

}
function edadPromoParametro(pfecha1,pfecha2,pfecha3) { //con parametros
    let actualAño = 2024;
    let fechaUno = pfecha1;
    let fechaDos = pfecha2;
    let fechaTres = pfecha3;
    let edadUno;
    let edadDos;
    let edadTres;
    let promedio;

     edadUno= actualAño - fechaUno; 
     edadDos= actualAño - fechaDos; 
     edadTres= actualAño - fechaTres; 
     promedio = (edadUno + edadDos + edadTres)/3;

     
     console.log("edad Uno:"+edadUno,"edad Dos:"+edadDos,"edad Tres:"+edadTres )
    promedio= ( edadUno + edadDos +edadTres)/3;
    return promedio;

     //return promedio ("sin parametros","edadUno"+edadUno,"edadTres"+edadDos,"edadTres"+edadTres);

}
