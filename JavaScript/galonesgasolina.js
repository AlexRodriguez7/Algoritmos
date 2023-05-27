// Función para calcular el valor a pagar y la cantidad de gasolina en litros
function calcularValorYCantidad(galones) {
  var litros = galones * 3.78541;  // Convertir galones a litros
  var centilitros = litros * 100;  // Convertir litros a centilitros
  var valorAPagar = centilitros * 25;  // Calcular el valor a pagar

  console.log("Cantidad de gasolina despachada: " + litros + " litros");
  console.log("Valor a pagar: $" + valorAPagar);
}

// Ejemplo de uso
var galones = 10;
calcularValorYCantidad(galones);