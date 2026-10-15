# qr-for-torresga

App mínima que redirige a la URL definida en la variable de entorno `REDIRECT_URL`.
El QR apunta a esta app; para cambiar el destino solo cambiás la variable.

## Variable de entorno

| Variable       | Ejemplo                    |
| -------------- | -------------------------- |
| `REDIRECT_URL` | `https://www.ejemplo.com`  |

La redirección es **302** con `Cache-Control: no-store`, así los navegadores no
cachean el destino y el cambio de URL aplica al instante.

## Deploy en Vercel

1. Importá el repo en Vercel.
2. Agregá `REDIRECT_URL` en *Settings → Environment Variables*.
3. Deploy. Cada vez que cambies la variable, hacé **Redeploy** para que tome efecto.

## Otros hosts (Render, Railway, etc.) o local

```bash
REDIRECT_URL=https://www.ejemplo.com npm start
```

Escucha en `PORT` (por defecto 3000).
