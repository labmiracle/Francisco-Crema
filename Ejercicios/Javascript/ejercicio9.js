function addOnlyNums(...argumentos) {
  let suma = 0;
  for (let i = 0; i < argumentos.length; i++) {
    suma += argumentos[i];
  }
  return suma;
}

console.log(addOnlyNums(1, 2, 3));
console.log(addOnlyNums());
console.log(addOnlyNums(16, 2, 45));
