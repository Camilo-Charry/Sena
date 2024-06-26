/**
 * ejercicio de nomina
 * 15 de mayo 2024
 * Autor : Jhoan Camilo Charry
 */


 function sueldo(pdiaT, pvalorD) {
    let diaT; //Dias Trabajados
    let valorD; //Valor por día
    let pago;
  
    diaT = pdiaT;
    valorD = pvalorD;
    pago = diaT * valorD;
    return pago;
  }
  function salud(pago) {
    let saludP = pago * 0.12;
    return saludP;
  }
  
  function pension(pago) {
    let pensionP = pago * 0.16;
    return pensionP;
  }
  
  function arl(pago) {
    let arlP = pago * 0.052;
    return arlP;
  }

  function subTras(pago) {
    let salarioM = 1300000;
    let trans;
    if (pago <= salarioM * 2) {
      trans = 114000;
    } else {
      trans = 0;
    }
    return trans;
  }

  function reten(pago) {
    let salarioM = 1300000;
    let retencion;
    if (pago > 8 * salarioM && Estrato == 6 ) {
      retencion = pago * 0.04;
    } else {
      retencion = 0;
    }
    return retencion;
  }


function bonos(pago , EstratoP){
    let bonificacion;
    let EstratoPersonas = EstratoP
    let sueldo = pago
    if(sueldo <= 1300000  && (EstratoPersonas === 1 || EstratoPersonas === 2) ){
        bonificacion = 100000
    }else{
        bonificacion = 0
    }
    return bonificacion;
}

let Estrato;
let subTrasP; 
let retencionP;
let arlP;
let pensionP;
let saludP;
let dias;
let valor;
let nomina = [];
let iteracion;
let totalPagar = [];
let totalPagarSueldo;

nomina= [ 
    {Cedula : 1077724121, Nombre : 'Camilo  ' , Apellido: 'Charry Perez', edad : 21 , Estrato : 2 , valorDia : 20000 , DiasTrabajados : 30},
    {Cedula : 1075225114, Nombre : 'Julieth Katalina ' , Apellido: 'Garcia', edad : 17 , Estrato : 2 , valorDia : 30000 , DiasTrabajados : 30},
    {Cedula : 1080291867, Nombre : 'Ingrid ' , Apellido: 'Medina Esquivel', edad : 18 , Estrato : 1 , valorDia : 20000 , DiasTrabajados : 30},
    {Cedula : 1075793094, Nombre : 'Karol Natalia ' , Apellido: 'Osorio Poveda', edad : 35 , Estrato : 2 , valorDia : 40000 , DiasTrabajados : 30},
    {Cedula : 1077723426, Nombre : 'Andres Felipe ' , Apellido: 'Garzon', edad : 19 , Estrato : 2 , valorDia : 60000 , DiasTrabajados : 30},
    {Cedula : 1138274089, Nombre : 'Daniel  ' , Apellido: 'Caicedo Trujillo', edad : 25 , Estrato : 4 , valorDia : 70000 , DiasTrabajados : 30},
    {Cedula : 1084331856, Nombre : 'Jesus David ' , Apellido: 'Fierro', edad : 18 , Estrato : 6 , valorDia : 100000 , DiasTrabajados : 30},
    {Cedula : 1075540543, Nombre : 'Marcos ' , Apellido: 'Rojas Alvarez', edad : 17 , Estrato : 7 , valorDia : 120000 , DiasTrabajados : 30},
    {Cedula : 1005256532, Nombre : 'Cristiano Ronaldo ' , Apellido: 'do santos aveiro', edad : 39 , Estrato : 5 , valorDia : 100000 , DiasTrabajados : 30},
    {Cedula : 1075231111, Nombre : 'Neymar da silva ' , Apellido: 'santos junior', edad : 31 , Estrato : 4 , valorDia : 12000 , DiasTrabajados : 30}
]

let tabla= document.getElementById("nomina");
let fila;
for(iteracion=0; iteracion<nomina.length; iteracion++){
if(iteracion %2==0){
   fila= "<tr>" +
    '<td class="colori">' + nomina[iteracion].Nombre + "</td>" +
    '<td class="colori">' + nomina[iteracion].Apellido + "</td>" +
    '<td class="colori">' + nomina[iteracion].Cedula + "</td>" +
    '<td class="colori">' + nomina[iteracion].valorDia + "</td>" +
    '<td class="colori">' + nomina[iteracion].DiasTrabajados + "</td>" +
  "</tr>";
}else{
   fila= "<tr>" +
  '<td class="coloro">' + nomina[iteracion].Nombre + "</td>" +
    '<td class="coloro">' + nomina[iteracion].Apellido + "</td>" +
    '<td class="coloro">' + nomina[iteracion].Cedula + "</td>" +
    '<td class="coloro">' + nomina[iteracion].valorDia + "</td>" +
    '<td class="coloro">' + nomina[iteracion].DiasTrabajados + "</td>" +
  "</tr>";
}
  
  tabla.innerHTML +=fila;
}




