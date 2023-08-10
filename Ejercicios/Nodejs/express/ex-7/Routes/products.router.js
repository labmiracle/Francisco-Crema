const express = require("express");
const products = require("../products.js");

const routers = express.Router();

routers.get("/", (req, res) => {
  const limit = req.query.limit;
  if (!limit) {
    res.status(404).json(products);
  } else {
    res.status(201).json(products.slice(0, limit));
  }
});

routers.get("/:id", (req, res) => {
  let id = req.params.id;
  const productId = products.find((product) => product.id === parseInt(id));
  if (productId) {
    res.status(200).json(productId);
  } else {
    res.status(404).json({ error: "No se encuentra el producto por id" });
  }
});

function generateUniqueId() {
  return Math.floor(Math.random() * (1000 - 5 + 1)) + 5;
}

routers.post("/", (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  const newProduct = {
    id: generateUniqueId(),
    name,
    price: parseFloat(price),
  };

  products.push(newProduct);

  return res
    .status(201)
    .json({ status: "success", msg: "Product added", data: newProduct });
});

routers.patch("/:id", (req, res) => {
  const idEdit = parseInt(req.params.id);
  const { name, price } = req.body;

  const productEdit = products.find((product) => product.id === idEdit);

  if (!productEdit) {
    return res.status(404).json({ error: "Product not found" });
  }

  if (name) {
    productEdit.name = name;
  }

  if (price) {
    productEdit.price = parseFloat(price);
  }

  return res.status(200).json({
    status: "success",
    msg: "Product updated",
    data: productEdit,
  });
});

routers.delete("/:id", (req, res) => {
  const idDelete = parseInt(req.params.id);

  const productIndex = products.findIndex((product) => product.id === idDelete);

  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];

  return res.status(200).json({
    status: "success",
    msg: "Product deleted",
    data: deletedProduct,
  });
});

module.exports = routers;
