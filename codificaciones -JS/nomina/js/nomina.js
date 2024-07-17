function salario(valorDiap,diasTrabajadosp){
    var valorDias=valorDiap;
    var diasTrabajados=diasTrabajadosp;

    var salario;

    salario= valorDias*diasTrabajados;

    return salario;
}

function salud(salario){
    var salud;

    salud= salario * 0.12;

    return salud;
}

function pension(salario){
    var pension;

    pension= salario * 0.16;

    return pension;
}

function arl(salario){
    var arl;

    arl= salario * 0.052;

    return arl;
}

function descuento(salud,pension,arl){
    var descuento;

    descuento= salud+pension+arl;

    return descuento;
}

function trasporte(salario){
    var subTrasporte;

    if(salario<salario*2){
        subTrasporte=140000;
    }else{
        subTrasporte=0;
    }

    return subTrasporte;
}

function impuesto(salario){
    var impuesto;

    if(salario>salario*4){
        impuesto=salario*0.04;
    }else{
        impuesto=0;
    }

    return impuesto;
}

function totalPagarT(salario){
     
    var totalPagar;

    salud=salud(salario);
    pension=pension(salario);
    arl=arl(salario);

    descuento=descuento(salud,pension,arl);
    impuesto=impuesto(salario);
    trasporte=trasporte(salario);

    totalPagar= salario-descuento+trasporte-impuesto;

    return totalPagar;
}