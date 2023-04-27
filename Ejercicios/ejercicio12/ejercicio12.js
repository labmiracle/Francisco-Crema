function adivinarNumero() {
  let numeroAleatorio = numAleatorio();
  let num = undefined;
  while (num != numeroAleatorio) {
    num = prompt("Ingrese un numero");
    if (num > numeroAleatorio) {
      console.log(" numero mas alto ");
    } else if (num < numeroAleatorio) {
      console.log(" numero mas chico ");
    } else if (num == numeroAleatorio) {
      console.log("mismo numero");
    }
  }
  return "saliste del adivinador";
}

function numAleatorio() {
  let dif = prompt(" nivel (1)=facil (2)=medio (3)=dificil ");
  switch (dif) {
    case "1":
      return Math.floor(Math.random() * (10 - 1 + 1) + 1);
      break;
    case "2":
      return Math.floor(Math.random() * (25 - 1 + 1) + 1);
      break;
    case "3":
      return Math.floor(Math.random() * (50 - 1 + 1) + 1);
      break;
  }
}
adivinarNumero();
