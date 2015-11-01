//Escribe una función que suma todos los dígitos en un array 
//y otra que multiplique todos los números de otra array.

var digitos1 = [8, 7, 6, 5, 4,];
var digitos2 = [5, 4, 3, 2, 1,];

function suma_digitos() {
    console.log("la suma de los dígitos " + (digitos1) + (" es ") + 
	(digitos1[0] + digitos1[1] + digitos1[2] + digitos1[3] + digitos1[4]));
}

suma_digitos();


function multiplicacion_digitos() {
    console.log("la multiplicación de los dígitos " + (digitos2) + (" es ") + 
	(digitos2[0] * digitos2[1] * digitos2[2] + digitos2[3] * digitos2[4]));
}

multiplicacion_digitos();

