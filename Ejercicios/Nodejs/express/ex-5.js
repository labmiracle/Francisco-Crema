const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use((req, res, next) => {
  console.log(`URL: ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Se esta escuchando el servidor http://localhost:${port}`);
});
