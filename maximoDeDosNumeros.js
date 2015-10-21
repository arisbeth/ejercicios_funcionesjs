console.log("n1");
var n1 = prompt();

console.log("n2");
var n2 = prompt();

function maximoDeDosNumeros() {
  if(n1>n2){
    console.log("numero maximo " + n1);
  }else if(n1<n2){
    console.log("numero maximo " + n2);
  }else if(n1===n2){
    console.log("son exactamente iguales");
  }
}

maximoDeDosNumeros();