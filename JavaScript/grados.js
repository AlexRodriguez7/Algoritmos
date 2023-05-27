// Función para convertir grados Celsius a Fahrenheit
function celsiusAFahrenheit(gradosCelsius) {
  var gradosFahrenheit = (gradosCelsius * 9/5) + 32;
  return gradosFahrenheit;
}

// Función para convertir grados Fahrenheit a Celsius
function fahrenheitACelsius(gradosFahrenheit) {
  var gradosCelsius = (gradosFahrenheit - 32) * 5/9;
  return gradosCelsius;
}

// Ejemplo de uso
var celsius = 25;
var fahrenheit = 77;

console.log(celsius + " grados Celsius son equivalentes a " + celsiusAFahrenheit(celsius) + " grados Fahrenheit.");
console.log(fahrenheit + " grados Fahrenheit son equivalentes a " + fahrenheitACelsius(fahrenheit) + " grados Celsius.");