function suma(arr, n) {
  let sum = 0;

  for (let i = 0; i <= n - 1; i++) {
    if (n > arr.length) {
      return "n supera la longitud del parametro";
    } else {
      sum += arr[i];
    }
  }

  return sum;
}
console.log(suma([1, 2, 3, 4, 5], 3));
