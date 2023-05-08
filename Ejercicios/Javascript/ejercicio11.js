function onlyUniques() {
  if (num.includes(result)) {
    console.log("Sí se encuentra el número buscado");
    return true;
  } else {
    console.log("No se encuentra el número buscado");
    return false;
  }
}

const num = [1, 2, 3, 4, 5];
const result = 5;
console.log(onlyUniques());
