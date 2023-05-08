const carrito = {
  productos: [
    { nombre: "papel higienico", unidades: 4, precio: 5 },
    { nombre: "chocolate", unidades: 2, precio: 1.5 },
  ],
  get precioTotal() {
    let total = 0;
    for (let i = 0; i < this.productos.length; i++) {
      total += this.productos[i].unidades * this.productos[i].precio;
    }
    return total;
  },
};
console.log(carrito.precioTotal);
