const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    const vistas = path.join(__dirname, "vistas", "about.html");

    fs.readFile(vistas, "utf-8", (err, aboutHtml) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(aboutHtml);
        res.end();
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Not Found");
      }
    });
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Valor de __dirname: ${__dirname}`);
  } else if (req.url === "/archivo") {
    const archivoTxt = path.join(__dirname, "archivo.txt");
    fs.readFile(archivoTxt, "utf-8", (err, data) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Contenido de archivo.txt: ${data}`);
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Error al leer archivo.txt: ${err.message}`);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Not Found");
  }
});

server.listen(port, () => {
  console.log(`Se está escuchando http://localhost:${port}`);
});
