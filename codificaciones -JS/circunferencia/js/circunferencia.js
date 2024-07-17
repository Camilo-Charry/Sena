function circunferencia() { //sin parametros
    let radio;
    let pi;
    let areaCircunferencia;

    radio= 5;
    pi= 3.1416;
    

    areaCircunferencia= pi * radio * radio;
    return areaCircunferencia;

}

const circunferenciaParametro = function (pradio) { //con parametros
    let radio = pradio;
     pi = 3.1416;
    let areaCircunferencia;
    areaCircunferencia= pi * radio * radio;
    return areaCircunferencia;
}