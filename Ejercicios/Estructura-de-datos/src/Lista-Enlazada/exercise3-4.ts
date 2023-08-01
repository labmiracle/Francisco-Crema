export class DoublyNode {
  data: number;
  next: DoublyNode | null;
  prev: DoublyNode | null;
  constructor(data: number, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

export class DoublyLinkedList {
  head: DoublyNode | null;
  tail: DoublyNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
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
    let newNode = new DoublyNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
    this.size++;
  }

  remove(value: number) {
    let current = this.head;

    while (current) {
      if (current.data === value) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        this.size--;
        break;
      }

      current = current.next;
    }
  }

  listSize(): number {
    return this.size;
  }

  find(value: number): DoublyNode | null {
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

    while (current !== null) {
      const next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }

    [this.head, this.tail] = [this.tail, this.head];
  }

  deleteDups() {
    let current = this.head;
    let uniqueElements = new Set();

    while (current) {
      if (uniqueElements.has(current.data)) {
        const next = current.next;
        if (current.prev) {
          current.prev.next = next;
        } else {
          this.head = next;
        }
        if (next) {
          next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        this.size--;
      } else {
        uniqueElements.add(current.data);
      }
      current = current.next;
    }
  }
}

const myList = new DoublyLinkedList();
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(2);
myList.add(4);
myList.add(3);

console.log("Lista original:");
myList.printList();

myList.deleteDups();
console.log("Lista sin duplicados:");
myList.printList();

myList.invert();
console.log("Lista invertida:");
myList.printList();
