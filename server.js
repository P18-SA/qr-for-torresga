// Servidor standalone (local, Render, Railway, etc.)
const http = require('http');
const handler = require('./api/index');

const port = process.env.PORT || 3000;

http.createServer(handler).listen(port, () => {
  console.log(`Redirigiendo a ${process.env.REDIRECT_URL} en el puerto ${port}`);
});
