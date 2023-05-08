function combineTwoArrays(arr1, arr2) {
  const array = [...arr1, ...arr2];
  return array;
}

console.log(combineTwoArrays([1, 2, 3], ["X", "Y", "Z"]));
