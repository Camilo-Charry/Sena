function areaRectangulo() { //sin parametros
    let rectanguloUno;
    let rectanguloDos;
    let baseUno;
    let baseDos;
    let alturaUno;
    let alturaDos;

    baseUno=5;
    alturaUno= 10;

    baseDos=8;
    alturaDos= 11;

    rectanguloUno = baseUno * alturaUno;
    console.log("el area del rectangulo uno es: "+rectanguloUno)
    rectanguloDos = baseDos * alturaDos;
    console.log("el area del rectangulo dos es: "+rectanguloDos)

    if (rectanguloUno>rectanguloDos) {
        return(" es mayor rectangulo uno "+rectanguloUno);
    } else {
        return(" es mayor rectangulo dos "+rectanguloDos);
    }
}

const areaRectanguloParametro = function (pbase1,paltura1,pbase2,paltura2) { //con parametros
    let baseUno = pbase1;
    let baseDos = pbase2;
    let alturaUno = paltura1;
    let alturaDos = paltura2;
    let rectanguloUno;
    let rectanguloDos;

    rectanguloUno = baseUno * alturaUno;
    rectanguloDos = baseDos * alturaDos;
    
    if (rectanguloUno>rectanguloDos) {
        console.log("Rectangulo uno es mayor "+rectanguloUno, "que el rectangulo dos: "+ rectanguloDos);
    } else {
        console.log("Rectangulo Dos es mayor "+rectanguloDos, "que el rectangulo uno: "+ rectanguloUno);
    }
}
