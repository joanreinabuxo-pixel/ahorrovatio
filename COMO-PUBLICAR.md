# AhorroVatio · Cómo publicar un artículo

La web está hecha con Astro. Cabecera, menú, pie, sitemap, RSS y listados se generan solos.

## Publicar (o programar) un artículo
1. Crea un archivo en `src/content/articulos/` con el slug como nombre, por ejemplo `precio-placas-solares.md`.
2. Arriba, entre las dos líneas `---`, rellena los datos (copia los de otro artículo):
   - `categoria`: placas-solares, aerotermia, tarifas-luz, subvenciones o ahorro-hogar.
   - `fecha`: el día en que debe salir (AAAA-MM-DD). Si es una fecha futura, saldrá ese día a las 7:00.
   - `publicado: true` cuando esté revisado. Con `false` es un borrador y no sale.
   - `faq` y `fuentes`: las preguntas frecuentes y las fuentes oficiales con su enlace.
3. Debajo va el texto del artículo.
4. Si el texto tiene alguna marca `[VERIFICAR`, la web **no se construye**: hay que confirmar el dato antes.

## Probar en el ordenador
- `npm install` (solo la primera vez) y `npm run dev`. Abre http://localhost:4321

## Anuncios
Cuando AdSense apruebe la web, se rellena `ADSENSE` en `src/config.ts`. Mientras esté vacío no se ve ningún hueco.
