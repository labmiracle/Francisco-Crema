const express = require("express");
const app = express();

const port = 8080;

const middleware = (req, res, next) => {
  console.log(`URL: ${req.url}`);
  next();
};

app.use(middleware);

app.get("/", (req, res) => {
  res.send("Holaaa");
});

app.get("/yo", (req, res) => {
  res.send("Soy Francisco Crema");
});

app.listen(port, () => {
  console.log(`Se esta escuchando el servidor http://localhost:${port}`);
});
