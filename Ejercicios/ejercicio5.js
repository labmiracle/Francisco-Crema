function camelize(str) {
  let letra1 = str.split(" ");

  letra1[0] = letra1[0].toLowerCase();

  for (let i = 1; i < letra1.length; i++) {
    let word = letra1[i];
    let capitalized =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    letra1[i] = capitalized;
  }

  let camelCase = letra1.join("");

  return camelCase;
}
console.log(camelize("Hola a todos que tal"));
