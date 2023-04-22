function palabraMasLarga(str) {
  let palabras = str.split(" ");
  let pMasLarga = "";

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > pMasLarga.length) {
      pMasLarga = palabras[i];
    }
  }
  return pMasLarga;
}

console.log(palabraMasLarga("Erase una vez que se era"));

function primeraMayuscula(str) {
  const palabras = str.split(" ");

  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substring(1);
  }

  return palabras.join(" ");
}

console.log(primeraMayuscula("En un lugar de la Mancha"));
