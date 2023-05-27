// Función para convertir litros a centilitros
function litrosACentilitros(litros) {
  return litros * 100;
}

// Función para convertir litros a decilitros
function litrosADecilitros(litros) {
  return litros * 10;
}

// Función para convertir litros a galones
function litrosAGalones(litros) {
  return litros * 0.264172;
}

// Función para convertir litros a onzas
function litrosAOnzas(litros) {
  return litros * 33.814;
}

// Ejemplo de uso
var litros = 2.5;
console.log(litros + " litros son equivalentes a:");
console.log(litrosACentilitros(litros) + " centilitros");
console.log(litrosADecilitros(litros) + " decilitros");
console.log(litrosAGalones(litros) + " galones");
console.log(litrosAOnzas(litros) + " onzas");

