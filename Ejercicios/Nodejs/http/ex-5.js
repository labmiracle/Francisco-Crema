const http = require("http");

const port = 3000;
const server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  res.end("Hola Miracle!");
});

server.listen(port, () => {
  console.log(`Escuchando el servidor http://localhost:${port}`);
});
