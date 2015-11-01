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



//Escribe una función que tome un string y lo devuelva reverso.

var yodaString =[ "debes", "leer", "cadena", "esta", "alreves", "Diria el maestro yoda" ];

console.log(yodaString);
alert(yodaString.reverse());



//Escribe una función que tome como argumento una palabra 
//y devuelva la palabra escrita en reversa. 

var palabra = prompt("Escriba una palabra y será devuelta en reversa"),
separador="",
    
alreves = palabra.split(separador);
alreves.reverse();

console.log(alreves);



//Escribe una función que tome como argumento un array de palabras 
//y devuelva la que tiene mayor longitud

var dinosaurios = ["Velociraptor","Diplodocus","Iguanodonte"];


if ((dinosaurios[0].length > dinosaurios[1].length)&&(dinosaurios[0].length > dinosaurios[2].length)){
  console.log("la palabra " + dinosaurios[0]+ " tiene mayor longitud con " +dinosaurios[0].length + " letras");
}
  else if ((dinosaurios[1].length > dinosaurios[0].length)&&(dinosaurios[1].length > dinosaurios[2].length)){
  console.log("la palabra " + dinosaurios[1]+ " tiene mayor longitud con " +dinosaurios[1].length + " letras");
}

else{console.log("la palabra " + dinosaurios[2]+ " tiene mayor longitud con " +dinosaurios[2].length + " letras");
}
