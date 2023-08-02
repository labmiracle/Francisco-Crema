export class Pila<T> {
  arr: T[];
  constructor() {
    this.arr = [];
  }

  push(item: T) {
    this.arr.push(item);
  }

  pop(): T | undefined {
    return this.arr.pop();
  }

  size(): number {
    return this.arr.length;
  }
}
