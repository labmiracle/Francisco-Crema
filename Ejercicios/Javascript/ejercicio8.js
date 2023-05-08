function sumar() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

let resultado = sumar(1, 2, 3, 4, 5, 6, 7);
console.log(resultado);
