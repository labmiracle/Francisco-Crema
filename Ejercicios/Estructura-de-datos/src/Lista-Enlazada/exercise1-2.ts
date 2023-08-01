export class Node {
  data: number;
  next: Node | null;
  constructor(data: number, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  head: Node | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  printList() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  add(data: number) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  remove(value: number) {
    let current = this.head;
    if (!current) {
      return;
    }
    let previous;
    while (current && current.data !== value) {
      previous = current;
      current = current.next;
    }
    if (!current) {
      return;
    }
    if (!previous) {
      this.head = current.next;
    } else {
      previous.next = current.next;
    }
    this.size--;
  }

  listSize(): number {
    return this.size;
  }

  find(value: number): Node | null {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  invert() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

const myList = new LinkedList();
myList.add(1);
myList.add(2);
myList.add(3);

myList.printList();
console.log(myList);

const node = myList.find(2);
console.log(node);

myList.invert();
console.log("Lista invertida:", myList);
