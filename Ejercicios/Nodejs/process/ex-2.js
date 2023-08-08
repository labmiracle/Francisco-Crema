const http = require("http");
const config = require("./config");

const server = http.createServer((req, res) => {
  res.writeHead(201, { "Content-Type": "text/plain" });
  res.end("Esto es un servidor de Node");
});

server.listen(config, () => {
  console.log(`Esta escuchando el servidor http://localhost:${config.port}`);
});
