const array1 = [1, 2, 3, 4, 5, 7, 3];
const array2 = [6, 7, 8, 9, 10, 5, 9, 1];

function ArrayTodo(array1: number[], array2: number[]) {
  const arrays = new Set([...array1, ...array2]);
  return arrays;
}

const todo = ArrayTodo(array1, array2);
console.log(todo);
