import { Pila } from "./exercise1";

function decimalToBinary(decimal: number): string {
  const stack = new Pila<number>();

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";
  while (stack.size() > 0) {
    binary += stack.pop();
  }

  return binary;
}

const decimalNumber = 123;
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(
  `El número decimal ${decimalNumber} convertido a binario: ${binaryRepresentation}`
);
