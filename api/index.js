// Redirige cualquier request a la URL definida en REDIRECT_URL.
// Usa 302 (temporal) y no-store para que los navegadores no cacheen
// el destino y el cambio de URL tome efecto inmediatamente.
module.exports = (req, res) => {
  const target = process.env.REDIRECT_URL;

  if (!target) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('REDIRECT_URL no está configurada');
    return;
  }

  res.statusCode = 302;
  res.setHeader('Location', target);
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.end();
};
