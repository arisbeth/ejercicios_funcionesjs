console.log("n1");
var n1 = prompt();

console.log("n2");
var n2 = prompt();

console.log("n3");
var n3 = prompt();

function maximoDeTresNumeros() {
  if((n1>n2)&&(n1>n3)){
    console.log("numero maximo " + n1);
  }else if((n1<n2)&&(n3<n2)){
    console.log("numero maximo " + n2);
  }else if((n1<n3)&&(n2<n3)){
    console.log("numero maximo " + n3);
  
  }else if((n1===n2)&&(n2===n3)){
    console.log("son exactamente iguales");
  }
}

maximoDeTresNumeros();
