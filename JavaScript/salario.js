// Función para calcular el salario de un empleado
function calcularSalario(salario) {
  var descuentoPension = 0;
  var auxTransporte = 0;
  var subsidioFamiliar = 0;

  if (salario < 699999) {
    descuentoPension = salario * 0.02;
    auxTransporte = salario * 0.06;
  } else if (salario >= 700000 && salario <= 999999) {
    descuentoPension = salario * 0.04;
    subsidioFamiliar = 12000;
  } else if (salario > 1000000) {
    descuentoPension = salario * 0.06;
  }

  var salarioNeto = salario - descuentoPension + auxTransporte + subsidioFamiliar;

  console.log("Salario bruto: $" + salario);
  console.log("Descuento de pensión: $" + descuentoPension);
  console.log("Auxilio de transporte: $" + auxTransporte);
  console.log("Subsidio familiar: $" + subsidioFamiliar);
  console.log("Salario neto: $" + salarioNeto);
}

// Ejemplo de uso
var salario = 800000;
calcularSalario(salario);