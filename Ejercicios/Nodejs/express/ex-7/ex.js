const routers = require("./Routes/products.router.js");

const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/products", routers);

app.listen(port, () => {
  console.log(`Se esta escuchando el servidor http://localhost:${port}`);
});
