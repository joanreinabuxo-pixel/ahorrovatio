# AhorroVatio · La fórmula de Ruta FP aplicada (versión del 26/11/2026)

Este documento manda sobre `PROMPT-PER-GEMINI.md` donde no coincidan. Sale de comparar AhorroVatio con los artículos de rutafp.es que ya posicionan (fp-mejor-pagadas, fp-o-universidad, que-fp-estudiar) y con su web.

## 1. Comparativa

| | Ruta FP (lo que posiciona) | AhorroVatio (24/11/2026) | Qué cambia |
|---|---|---|---|
| Artículos en el lanzamiento | 44 en 6 categorías (5-10 por categoría) | 30 en 5 categorías (4-8) | **40 en el lanzamiento**, 7-9 por categoría |
| Artículos preparados | — | 85 en el índice | **90 artículos** + la calculadora |
| Longitud | 2.300-2.800 palabras | 1.100-2.150 (media 1.450) | Satélites **1.800+**, pilares **2.500+** |
| Enlaces internos en el texto | 10-16, a 4-13 artículos distintos | 2-9 (media 4) | **Mínimo 8**, con líneas «Te puede interesar:» |
| Respuesta rápida | Sí, y lista «En este artículo encontrarás:» | Sí (caja `.answer`), sin lista | Añadir la lista de 4-5 puntos |
| Tablas | 1-3, una cerca del principio | 1-2 (tabla de datos clave) | Igual; mantener |
| Bloque personal | 3-6 «Desde el aula:» en primera persona, honestos («no trabajo con alumnos de FP») | Ninguno; solo «Mi consejo» | Bloque **«En mi casa:»**, solo con experiencia real de JOAN (pendiente de que la cuente) |
| Preguntas frecuentes | 6 | 4-6 | **6** |
| Conclusión | Siempre, como último H2 antes de las fuentes | Solo en 5 de 30 | **Siempre** |
| Fuentes | 5-8, cada una con fecha | 3-9 con fecha de consulta | Mínimo 5 |
| Imagen principal | Todas (1200×675, WebP) y algún gráfico | Ninguna | Prompts para Gemini; JOAN las genera |
| Página del autor | /sobre-mi/ | /sobre-nosotros/ | Cambiada a **/sobre-mi/** (redirección 301) |
| Publicación diaria | Funciona | La tarea fallaba (pedía un secreto que no existe) | Arreglada: no necesita secretos |
| Carpetas en el Mac | `Articulos en Formato Word/<slug>.docx` (una carpeta plana) | `Articulos/<N- nombre>/` con PDF y ficha, numeración «3b-», «4b-»… | Igual que Ruta FP (ver punto 4) |

Lo que ya está igual y no hay que tocar: migas de pan, línea de confianza con fecha, caja de autor, botones de compartir, FAQ con schema, fuentes oficiales, publicación programada con `fecha` y bloqueo por `[VERIFICAR]`, sitemap, RSS y páginas legales. Las URL `/categoria/slug/` se quedan: la web aún no está indexada con dominio propio y la diferencia con las URL planas de Ruta FP no afecta al posicionamiento.

Una cosa de Ruta FP que **no** copiamos: el «nosotros» editorial del cuerpo. AhorroVatio va en primera persona del singular, como los bloques «Desde el aula».

## 2. Plantilla de artículo (todas iguales)

1. H1 con la keyword en forma natural; `titulo` con el año cuando la búsqueda lo pide.
2. Caja `.answer` con la respuesta rápida y la cifra clave.
3. Lista «En este artículo encontrarás:» (4-5 puntos).
4. Tabla de datos clave (`.keydata`).
5. H2 numerados que respondan a preguntas reales, con H3 donde haga falta. Obligatorio:
   - un ejemplo con números completos y de dónde sale cada número;
   - una tabla comparativa si hay opciones;
   - «Cuándo compensa / cuándo no»;
   - «Errores frecuentes»;
   - una o dos líneas «Te puede interesar:» con enlace.
6. Bloques «En mi casa:» solo si JOAN aporta la experiencia (nunca inventada). Mientras tanto, «Mi consejo» basado en datos.
7. H2 «Conclusión» (3-5 frases con la decisión práctica).
8. 6 preguntas frecuentes en el frontmatter (`faq`).
9. Mínimo 5 fuentes oficiales con enlace y fecha.
10. Mínimo 8 enlaces internos en el texto: al pilar de su categoría, a 2-3 del mismo cluster, a 1-2 de otro cluster y a la calculadora si encaja.
11. `imagen: /img/articulos/<slug>.webp` cuando JOAN haya generado la imagen.

Longitud: satélites 1.800-2.500 palabras, pilares 2.500-3.300. Nada de relleno: si falta extensión, se añade un ejemplo más, una tabla por ciudad o una sección de dudas reales.

## 3. Lanzamiento y cola

- **Lanzamiento (día L): 40 artículos.** Los 30 publicados + 10 de temporada de invierno (ver `calendario.md`, órdenes 31-40).
- **Después: 1 artículo al día de lunes a viernes a las 7:00** hasta el 90. Cada artículo terminado y verificado se sube con `publicado: true` y su `fecha` futura; la tarea «Publicación diaria» de GitHub lo saca solo ese día y lo apunta en `registro-publicacion.md`.
- Antes de pasar a los nuevos, se refuerzan los 30 publicados con la plantilla del punto 2 (primero los 5 pilares).

## 4. Carpetas en el Mac (igual que Ruta FP)

```
ahorrovatio/
├── Articulos en Formato Word/   ← <slug>.docx de cada artículo terminado (carpeta plana, sin números)
├── Articulos en PDF/            ← <slug>.pdf (la versión que se ve como en la web)
├── Imagenes/                    ← <slug>.webp que genera JOAN con los prompts
├── Shorts/                      ← <NN - título>/ con vídeo, voces, guion y descripción
├── Pinterest CSV/               ← tandas de pins
├── imagenes-gemini.pdf          ← prompts de las imágenes
├── pins-pinterest.pdf
├── tiktok-reels-ahorrovatio.pdf
└── web/                         ← el código (el repo)
```

El número de cada artículo vive solo en `planificacion/indice-articulos.md`; los archivos se llaman por el slug, así nunca hay «3b-» ni duplicados. Las fichas SEO ya no van en archivos sueltos: los datos (título, descripción, keyword) están en el índice, el calendario y el frontmatter.
