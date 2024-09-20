const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Lee y enviar la imagen para la pagina principal
    const imgPath = path.join(__dirname, 'images', 'home.jpg');
    fs.readFile(imgPath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Error al cargar la imagen');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(data);
      }
    });
  } else if (req.url === '/about') {
    // Leer y enviar la imagen para la página "about"
    const imgPath = path.join(__dirname, 'images', 'about.jpg');
    fs.readFile(imgPath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Error al cargar la imagen');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Página no encontrada');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
