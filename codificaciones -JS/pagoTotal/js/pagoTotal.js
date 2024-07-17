 /*
 function pagoTotaldos() {//sin parametros
    var sueldo;
    var valorDia;
    var diaTrabajdos
    
    var impuesto;
    var transporte; 
    var minimo; 

    var descuento; 
    var salud;
    var pension;
    var arl;

    var totalPagar;

    valorDia= 100000;
    diaTrabajdos= 30;

    sueldo= valorDia * diaTrabajdos;

    salud= sueldo * 0.12;
    pension= sueldo * 0.16;
    arl= sueldo * 0.052;
    descuento= salud + pension + arl;

    minimo= 1300000
    
    if (sueldo< minimo*2){
        transporte= 114000;
        totalPagar= (sueldo-descuento)+transporte;
    }
    else{
        transporte= 0 ;
    }

    if(sueldo> minimo*4){
        impuesto= sueldo * 0.04;
        totalPagar=(sueldo-descuento)-impuesto;
    }
    else{
        impuesto= 0
        totalPagar= sueldo-descuento
    }
    console.log("sueldo: "+sueldo+"\n"+"descuento: "+descuento+"\n"+"trasporte: "+transporte+"\n"+"impuesto: "+impuesto+"\n"+"total a pagar: "+totalPagar)
 }
*/
 const salario = function(pvalorDia,pdiasTrabajados){
    let dia =pvalorDia;
    let diaTrabajados = pdiasTrabajados;
    let sueldo = dia * diaTrabajados
    return sueldo;
 }
 const salud = function(pvalorDia,pdiasTrabajados){
    let saludPersona;
    let salarioPer = salario(pvalorDia,pdiasTrabajados);
     saludPersona= salarioPer * 0.12;
     return saludPersona;
 }
 const arl = function(pvalorDia,pdiasTrabajados){
    let arlPersona;
    let salarioPer = salario(pvalorDia,pdiasTrabajados);
     arlPersona= salarioPer * 0.052;
     return arlPersona;
 }
 const pension = function(pvalorDia,pdiasTrabajados){
    let pensionPersona;
    let salarioPer = salario(pvalorDia,pdiasTrabajados);
     pensionPersona= salarioPer * 0.16;
     return pensionPersona;
 }
 const subTrans = function(pvalorDia,pdiasTrabajados){
    let transporte;
    let salarioPer = salario(pvalorDia,pdiasTrabajados)
    let salarioMinimo;
     salarioMinimo = 1300000;

     if (salarioPer<=2 * salarioMinimo) {
        transporte = 114000;
       
        
     } else {
        transporte = 0;
     }
     return transporte;

 }
 const rad = function(pvalorDia,pdiasTrabajados){
    let impuesto;
    let salarioPer = salario(pvalorDia,pdiasTrabajados)
    let salarioMinimo;
     salarioMinimo = 1300000;

     if (salarioPer >=4 * salarioMinimo) {

        impuesto = salarioPer * 0.04;
     } else {
        impuesto = 0;
     }
     return impuesto;

 }
 const descuento = function(pvalorDia,pdiasTrabajados){
    let descuento;
    let saludPersona = salud(pvalorDia,pdiasTrabajados);
    let pensionPersona = pension(pvalorDia,pdiasTrabajados);
    let arlPersona = arl(pvalorDia,pdiasTrabajados);
    let retencion = rad(pvalorDia,pdiasTrabajados);

        descuento = parseInt(saludPersona) + parseInt(pensionPersona) + parseInt(arlPersona) + parseInt(retencion);
    
        return descuento;

 }
 const pagoTotal = function(pvalorDia,pdiasTrabajados){
         let nomina;
        let salarioPer = salario(pvalorDia,pdiasTrabajados);
        let deducible = descuento(pvalorDia,pdiasTrabajados);
        let transporte= subTrans(pvalorDia,pdiasTrabajados);
       
         
        nomina = (salarioPer - deducible) + transporte;
        return nomina;  
 }
 
/*
 function pagoTotalParametros(pvalorDia,pdiasTrabajados) { // con parametros
    let sueldo;
    let valorDia;
    valorDia = pvalorDia;
    let diaTrabajados;
    diaTrabajados = pdiasTrabajados;

    let impuesto;
    let transporte; 
    let minimo; 

    let descuento; 
    let salud;
    let pension;
    let arl;

    let totalPagar;

    sueldo= valorDia * diaTrabajados;

    salud= sueldo * 0.12;
    pension= sueldo * 0.16;
    arl= sueldo * 0.052;
    descuento= salud + pension + arl;

    minimo= 1300000
    console.log("con parametros") 
    if (sueldo< minimo*2){
        transporte= 114000;
        totalPagar= (sueldo-descuento)+transporte;
    }
    else{
        transporte= 0 ;
    }

    if(sueldo> minimo*4){
        impuesto= sueldo * 0.04;
        totalPagar=(sueldo-descuento)-impuesto;
    }
    else{
        impuesto= 0
        totalPagar= sueldo-descuento
      
    }
console.log("sueldo: "+sueldo+"\n"+"descuento: "+descuento+"\n"+"trasporte: "+transporte+"\n"+"impuesto: "+impuesto+"\n"+"total a pagar: "+totalPagar)

 }
 */