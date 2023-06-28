interface values {
  pc: string;
  ram: string;
  memory: string;
  price: string;
}

const hardware: values[] = [
  {
    pc: "Notebook Gamer",
    ram: "16GB",
    memory: "1TB",
    price: "$ 800",
  },
  {
    pc: "Macbook air M2",
    ram: "8GB",
    memory: "258GB",
    price: "$ 1100",
  },
  {
    pc: "Compu de escritori Gamer",
    ram: "32GB",
    memory: "2TB",
    price: "$ 1500",
  },
  {
    pc: "Macbook pro M1",
    ram: "16GB",
    memory: "1TB",
    price: "$ 1700",
  },
  {
    pc: "IMac",
    ram: "8GB",
    memory: "512GB",
    price: "$ 1300",
  },
];

const modelsPc = () => {
  const model = hardware.map((mp) => {
    return { PC: mp.pc, Price: mp.price };
  });
  return model;
};

const pricePc = () => {
  const product = hardware.find((p) => parseInt(p.price.substring(2)) > 1300);
  if (product) {
    return `Se encontró el producto con valor a ${product.price}`;
  }
  return "No se encontró un producto con el valor buscado";
};

const ramPc = () => {
  const rams = hardware.filter((r) => r.ram === "8GB");
  return rams;
};

const priceTotal = () => {
  const priceMax = hardware.reduce((acc, price) => {
    const sumPrice: number = parseInt(price.price.substring(2));
    if (!isNaN(sumPrice)) {
      return acc + sumPrice;
    }
    return acc;
  }, 0);
  const result = `$ ${priceMax}`;
  return result;
};

function cero(op?: (a: number) => number): number {
  return op ? op(0) : 0;
}

function one(op?: (a: number) => number): number {
  return op ? op(1) : 1;
}

function two(op?: (a: number) => number): number {
  return op ? op(2) : 2;
}

function three(op?: (a: number) => number): number {
  return op ? op(3) : 3;
}

function four(op?: (a: number) => number): number {
  return op ? op(4) : 4;
}

function five(op?: (a: number) => number): number {
  return op ? op(5) : 5;
}

function six(op?: (a: number) => number): number {
  return op ? op(6) : 6;
}

function seven(op?: (a: number) => number): number {
  return op ? op(7) : 7;
}

function eight(op?: (a: number) => number): number {
  return op ? op(8) : 8;
}

function nine(op?: (a: number) => number): number {
  return op ? op(9) : 9;
}

function sum(a: number): (b: number) => number {
  return (b: number) => a + b;
}

function res(a: number): (b: number) => number {
  return (b: number) => b - a;
}

function multi(a: number): (b: number) => number {
  return (b: number) => a * b;
}

function div(a: number): (b: number) => number {
  return (b: number) => Math.floor(b / a);
}

console.log("7 * 5 = ", seven(multi(five()))); // debe devolver 35
console.log("4 + 9 = ", four(sum(nine()))); // debe devolver 13
console.log("8 - 3 = ", eight(res(three()))); // debe devolver 5
console.log("6 / 2 = ", six(div(two()))); // debe devolver 3
