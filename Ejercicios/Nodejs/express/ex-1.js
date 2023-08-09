const express = require("express");
const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.send("Holaaa");
});

app.listen(port, () => {
  console.log(`Se esta escuchando el servidor http://localhost:${port}`);
});
