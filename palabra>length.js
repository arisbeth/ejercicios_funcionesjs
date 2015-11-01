//Escribe una función que tome como argumento un array de palabras 
//y devuelva la que tiene mayor longitud.
var dinosaurios = ["Velociraptor","Diplodocus","Iguanodonte"];


if ((dinosaurios[0].length > dinosaurios[1].length)&&(dinosaurios[0].length > dinosaurios[2].length)){
  console.log("la palabra " + dinosaurios[0]+ " tiene mayor longitud con " +dinosaurios[0].length + " letras");
}
else if ((dinosaurios[1].length > dinosaurios[0].length)&&(dinosaurios[1].length > dinosaurios[2].length)){
  console.log("la palabra " + dinosaurios[1]+ " tiene mayor longitud con " +dinosaurios[1].length + " letras");
}

else{console.log("la palabra " + dinosaurios[2]+ " tiene mayor longitud con " +dinosaurios[2].length + " letras");
}
