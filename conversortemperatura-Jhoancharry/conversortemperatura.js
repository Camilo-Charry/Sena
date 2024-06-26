/**
 * funcion-conversor
 * autor: Jhoan Charry
 */
// Definición de variables

let opc;
let temp, res;
console.log("Conversor de Temperatura");
console.log("1. Celsius a Fahrenheit");
console.log("2. Fahrenheit a Celsius");
console.log("Seleccione una opción (1 o 2):");
opc = parseInt(prompt());
switch (opc) {
    case 1:
        temp = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
        res = (temp * 9/5) + 32;
        alert("La temperatura equivalente en grados Fahrenheit es:" +res);
        break;
    case 2:
        temp = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit:"));
        res = (temp - 32) * 5/9;
        alert("La temperatura equivalente en grados Celsius es:"+res);
        break;
    default:
        alert("Opción no válida.");
}