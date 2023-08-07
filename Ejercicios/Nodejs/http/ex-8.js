const http = require("http");

const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/miraclelab") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hola MiracleLab!</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Chau MiracleLab!</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Escuchando el servidor http://localhost:${port}`);
});
