// Función para sumar dos números
function sumar(num1, num2) {
  return num1 + num2;
}

// Función para restar dos números
function restar(num1, num2) {
  return num1 - num2;
}

// Función para multiplicar dos números
function multiplicar(num1, num2) {
  return num1 * num2;
}

// Función para dividir dos números
function dividir(num1, num2) {
  if (num2 === 0) {
    return "Error: división entre cero";
  }
  return num1 / num2;
}

// Ejemplo de uso
var numero1 = 10;
var numero2 = 5;

console.log("Suma: " + sumar(numero1, numero2));
console.log("Resta: " + restar(numero1, numero2));
console.log("Multiplicación: " + multiplicar(numero1, numero2));
console.log("División: " + dividir(numero1, numero2));