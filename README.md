# lulabynuria.com

Web estática mínima de **Lula by Núria** (@lulabynuria) para el lanzamiento del Método Lula: página principal con cuenta atrás y política de privacidad. HTML/CSS/JS vanilla, sin frameworks, sin build, sin analítica, sin cookies y sin recursos de terceros (fuentes autoalojadas).

## Estructura
- `index.html`, `privacidad.html`, `404.html`, `robots.txt`, `CNAME`, `.nojekyll`
- `css/site.css`, `js/countdown.js`, `js/config.js`
- `assets/` fuentes woff2 (subconjunto latino) e imágenes web optimizadas
- `marca-lula/` guía de marca: **`marca-lula/BRAND.md`** (colores, tipografías, logos, contraste, tono) y `tokens.css`. Los PNG originales de 6250 px están ahí como referencia y no se sirven en la web.

## Qué cambiar
- **Fecha de lanzamiento:** `LAUNCH_DATE` al inicio de `js/countdown.js`. Formato ISO con offset de Madrid (`+01:00` invierno, `+02:00` verano). Ahora mismo: `2027-01-10T00:00:00+01:00` (provisional, falta confirmar la hora). El texto final está en `LAUNCHED_TEXT`.
- **Enlace del botón:** `NEWSLETTER_URL` en `js/config.js` (hay un TODO para la landing de Kit con origen web).
- **Marcadores de privacidad:** busca en `privacidad.html` `[NOMBRE Y APELLIDOS]`, `[NIF]`, `[DIRECCIÓN]` y `[FECHA]` y sustitúyelos.

## Despliegue
GitHub Pages desde `main` / raíz. Cada push a `main` publica. El dominio propio se define en `CNAME`; requiere DNS apuntando a GitHub Pages y, cuando haya certificado, marcar *Enforce HTTPS* en Settings → Pages.

Probar en local: `python3 -m http.server` y abrir http://localhost:8000.
