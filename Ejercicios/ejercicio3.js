function calcularDiasCrecimiento(
  velocidadCrecimiento,
  velocidadDecrecimiento,
  alturaDeseada
) {
  let nacimiento = 0;
  let dias = 0;

  while (alturaDeseada > nacimiento) {
    nacimiento += velocidadCrecimiento;
    nacimiento -= velocidadDecrecimiento;
    dias++;
  }
  return dias;
}

console.log(calcularDiasCrecimiento(6, 2, 10));
