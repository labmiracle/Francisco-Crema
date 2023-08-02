import { Pila } from "./exercise1";

function decimalToBase(decimal: number, base: number): string {
  if (base < 2 || base > 36) {
    throw new Error("Error, debe estar entre 2 y 36.");
  }

  const stack = new Pila<string>();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  while (decimal > 0) {
    const remainder = decimal % base;
    stack.push(digits[remainder]);
    decimal = Math.floor(decimal / base);
  }

  let result = "";
  while (stack.size() > 0) {
    result += stack.pop();
  }

  return result;
}

const decimalNumber = 650;
const base = 30;
const baseRepresentation = decimalToBase(decimalNumber, base);
console.log(
  `El número decimal ${decimalNumber} en base ${base} es: ${baseRepresentation}`
);
