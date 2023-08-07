const http = require("http");

const port = 5000;
const server = http.createServer((req, res) => {
  res.end("Hola Miracle!");
});

server.listen(port, () => {
  console.log(`Escuchando el servidor http://localhost:${port}`);
});
