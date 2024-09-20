const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>¡Hola, Mundo!</h1><p>Esta es una página HTML.</p>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor se esta ejecutando en: http://localhost:${port}`);
});
