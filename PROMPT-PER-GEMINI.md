# Prompt para Gemini: llevar AhorroVatio al nivel de Ruta FP

> Copia todo lo que hay debajo de la línea y pégalo en Gemini, con la carpeta `ahorrovatio` abierta.

---

Eres mi socio técnico y editorial para **AhorroVatio (ahorrovatio.com)**, un blog en español sobre placas solares, aerotermia, tarifas de luz, subvenciones y ahorro energético en España, que quiero monetizar con Google AdSense. Ya tengo otro blog funcionando y aprobado en AdSense, **Ruta FP (rutafp.es)**, y quiero que AhorroVatio funcione igual de bien o mejor. Abajo te explico qué hay ahora en la carpeta, qué falla y todo lo que quiero que hagas, por fases. Trabaja fase a fase, enséñame lo que cambias y no pases a la siguiente sin que yo lo vea.

## 0. Reglas que no se pueden romper

1. **No inventes nada sobre mí.** Soy JOAN, maestro de Primaria en Cataluña. No soy instalador, ingeniero ni asesor fiscal. Nunca escribas que he instalado placas, que he asesorado a clientes ni que tengo una experiencia que no tengo. Si un texto necesita una experiencia mía real, **pregúntamela** y déjalo marcado como `[PREGUNTAR A JOAN]`.
2. **No inventes datos personales ni legales.** NIF, dirección, nombre completo, correo: pídemelos. Mientras falten, deja `[NIF]`, `[NOMBRE]`, `[DIRECCIÓN]`, `[CORREO]`, `[FECHA]`.
3. **Cada cifra (precio, porcentaje, plazo, límite fiscal, potencia, ahorro) tiene que tener fuente oficial o fiable enlazada.** Si no la puedes comprobar, márcala en el texto como `[VERIFICAR: qué falta y dónde mirarlo]`. Un artículo con `[VERIFICAR]` no se puede publicar.
4. Energía, impuestos y ayudas son temas de dinero (YMYL para Google). Prefiero un artículo prudente y bien citado antes que uno con cifras bonitas sin respaldo.
5. Ortografía y redacción impecables en español de España. Revisa cada texto antes de dármelo: tildes, comas, mayúsculas, unidades (kWh, kWp, °C, m²), decimales con coma y miles con punto.
6. No borres mis archivos sin preguntarme. Si algo sobra, propón borrarlo y espera mi sí.

## 1. Qué hay ahora (diagnóstico)

Esto es lo que he visto en la carpeta. Compruébalo tú también.

**Web**
- Web estática en HTML a mano: 20 páginas `index.html`, `styles.css`, `main.js`, `CNAME` (ahorrovatio.com), `robots.txt`, `sitemap.xml`, `ads.txt`, `COMO-PUBLICAR.txt`, una plantilla en `plantillas/articulo/`.
- La cabecera, el menú, el pie y la barra lateral están **copiados a mano en cada página**. Cada artículo nuevo obliga a tocar 4 o 5 archivos (categoría, portada, sitemap...). Es muy fácil equivocarse.
- `COMO-PUBLICAR.txt` dice que se publica con **GitHub Pages**. GitHub Pages no está pensado para webs comerciales con anuncios; Ruta FP usa **Cloudflare Pages** por eso.
- Repositorio git conectado a `github.com/joanreinabuxo-pixel/ahorrovatio` con 3 commits. La carpeta `Articulos/` está en `.gitignore`, así que los borradores no tienen copia en GitHub.

**Artículos publicados (6)**
| Artículo | Palabras aprox. | Problemas principales |
|---|---|---|
| Cuántas placas para una casa de 100 m² | ~800 | Corto. Fuentes sin enlace. Pone "6 min de lectura" con 700 palabras. |
| Aerotermia con radiadores convencionales | ~680 | Corto. Sin datos de consumo en euros ni ejemplo real por zona. Usa la marca "Climalit" como genérico. |
| Batería virtual | ~650 | **El título promete "qué comercializadoras la ofrecen" y no nombra ninguna.** Falta tabla comparativa con precios y condiciones. |
| Deducción IRPF 20/40/60 % | ~600 | **No dice hasta qué fecha está vigente la deducción** (se ha ido prorrogando: hay que comprobar la vigencia actual en la AEAT y el BOE). Falta ejemplo numérico completo. |
| Bonificación IBI Madrid | ~890 | No da el porcentaje y los años concretos de cada municipio: todo es "habitualmente entre el 30 % y el 50 %". Falta tabla por municipio con enlace a cada ordenanza fiscal. |
| Termostatos inteligentes | ~480 | Muy corto para una comparativa. Cifra "12 %–22 % de ahorro" sin fuente. Comparativa de productos sin haberlos probado y sin aviso de afiliación. |

- En `Articulos/` cada artículo tiene `articulo.pdf` y `ficha-seo.md` (keyword, intención, copy para Pinterest). El 6 tiene la ficha con otro nombre (`articulo.md`): unifícalo.
- Autor: "Equipo AhorroVatio", sin persona real, sin foto, escrito en plural. Para Google eso es poca confianza (E-E-A-T) en temas de dinero.
- No hay **ninguna imagen**: ni destacada, ni `og:image`, ni imágenes en el texto.
- Las fuentes del final no son enlaces.

**Categorías**
- Cada página de categoría lista unos 15 títulos con la etiqueta **"Próximamente"** (unos 70 en total), y las "Guía principal" de Placas solares y de Aerotermia también son "Próximamente". A un revisor de AdSense y a Google esto les parece una web a medio hacer.

**Anuncios y legal**
- 4 huecos de anuncio en artículos de 500–800 palabras, dos de ellos **antes del índice**. Es demasiado.
- Mientras no hay anuncio real, cada hueco se ve como una **caja punteada con el texto interno** ("Tras el primer párrafo · display adaptable"). Si la web sale así, el revisor de AdSense lo ve.
- `ads.txt` con `pub-XXXXXXXXXXXXXXXX`.
- Aviso legal, privacidad y contacto con `[corchetes]` sin rellenar. La política de privacidad (~150 palabras) y la de cookies (~90) son demasiado cortas.
- Aviso de cookies propio que no bloquea nada. Con AdSense en Europa hace falta la CMP de Google (TCF v2.2).
- Las fuentes tipográficas se cargan desde Google Fonts (más lento y, en Europa, problema de privacidad).

**SEO técnico**
- Solo hay datos estructurados `Article` y `FAQPage` en los artículos. Faltan `datePublished`, `image`, autor `Person`, `BreadcrumbList`, y `WebSite`/`Organization` en la portada.
- No hay página 404, RSS, botones de compartir, verificación de Search Console, analítica ni etiquetas para Discover (`max-image-preview:large`).
- La barra superior dice "Actualizado: noviembre de 2026" fija en todas las páginas.
- La plantilla `plantillas/` se sube a la web (con `noindex` y `Disallow`). Mejor que no se publique.

**Lo que está bien y hay que mantener**
- Diseño limpio y con personalidad (colores, tipografías, logo del rayo), tabla "Resumen rápido", respuesta directa al principio, índice, FAQ, enlaces internos, páginas de independencia y "sobre nosotros", la calculadora solar y las fichas para Pinterest. La idea de "cinco pasos" en la portada es buena.

## 2. Fase 1: base técnica como Ruta FP

Ruta FP es un sitio **Astro** (generador estático) en GitHub, desplegado en **Cloudflare Pages** con dominio propio. Quiero lo mismo aquí:

1. **Migra la web a Astro**, manteniendo exactamente el diseño actual (`styles.css`, colores, logo, tipografías) y las mismas URL (no cambies ninguna dirección ya publicada).
   - Un único layout con cabecera, menú, pie y barra lateral.
   - Cada artículo en `src/content/articulos/<slug>.md` con este frontmatter:
     ```yaml
     numero: 7
     titulo: "Título visible (H1)"
     tituloSeo: "Título para Google, máx. 60 caracteres"
     descripcion: "Meta descripción, 140–155 caracteres"
     categoria: placas-solares   # placas-solares | aerotermia | tarifas-luz | subvenciones | ahorro-hogar
     keyword: "keyword principal"
     publicado: false
     fecha: 2026-12-01          # día de publicación
     actualizado: 2026-12-01
     imagen: /img/articulos/<slug>.webp
     imagenAlt: "Descripción de la imagen"
     faq:
       - pregunta: "..."
         respuesta: "..."
     fuentes:
       - nombre: "AEAT — Deducciones por obras de mejora de eficiencia energética"
         url: "https://..."
     ```
   - Las páginas de categoría, la portada ("Últimas guías"), los "Artículos relacionados", el sitemap y el RSS se generan **solos** a partir de los artículos.
2. **Publicación programada como Ruta FP:** un artículo sale en la web solo si `publicado: true` **y** `fecha` es hoy o anterior. El build tiene que **fallar** si un artículo publicado contiene `[VERIFICAR` o `[PREGUNTAR A JOAN]`, o si una página legal contiene `[NIF]`, `[NOMBRE]`, `[DIRECCIÓN]`, `[CORREO]` o `[FECHA]`.
3. **Enlaces a artículos no publicados:** al generar la web, si un texto enlaza a un artículo que aún no ha salido, quita el enlace y deja el texto normal (así nunca hay enlaces rotos).
4. **Modo revisión** (`npm run revision`): muestra también los borradores, resalta en amarillo los `[VERIFICAR]`, pone `noindex` en todo y muestra los huecos de anuncio. En producción, nada de eso.
5. **Quita los "Próximamente"** de las categorías y de la portada. La lista de artículos futuros pasa a un archivo interno `planificacion/calendario.md`, no a la web.
6. **Página 404** propia con buscador o enlaces a las categorías.
7. **Fuentes tipográficas descargadas en la propia web** (woff2 en `/fonts/`, `font-display: swap`), sin llamar a Google Fonts.
8. Imágenes en **WebP**: 1200×675 para la destacada y 600 px para las tarjetas, con `width`/`height` puestos para que no haya saltos de página (CLS), y `loading="lazy"` excepto la primera.
9. No publiques `plantillas/` ni `Articulos/`. Mueve `Articulos/` dentro del repositorio a una carpeta que no se publique (por ejemplo `borradores/`) para que tenga copia en GitHub (el repositorio es privado).
10. Actualiza `COMO-PUBLICAR.txt` con el nuevo sistema, explicado para alguien que no es programador.

## 3. Fase 2: confianza (E-E-A-T) y páginas obligatorias

1. **Autor real.** Cambia "Equipo AhorroVatio" por mi nombre, en primera persona del singular. Crea la página `/sobre-mi/` (redirige `/sobre-nosotros/` a la nueva) explicando con honestidad quién soy: un maestro que decidió estudiar a fondo cómo bajar la factura de casa y que lo explica con datos oficiales. Pregúntame qué experiencia real tengo (¿tengo placas?, ¿aerotermia?, ¿he pedido presupuestos?, ¿he hecho la Renta con esta deducción?) y usa solo eso.
2. **Caja de autor** al final de cada artículo con foto (te la daré), dos líneas sobre mí y enlace a `/sobre-mi/` y a `/politica-independencia/`.
3. **Bloque de voz propia**, como "Desde el aula" en Ruta FP. Aquí se llamará **"Lo he comprobado"**: 3–5 líneas en mi voz sobre algo que yo haya hecho de verdad (por ejemplo: "He metido mi código postal en PVGIS y me sale...", "He mirado la ordenanza de mi ayuntamiento y..."). Si no tengo nada real para ese artículo, el bloque no aparece. Nunca te lo inventes.
4. **Línea de confianza** bajo el título de cada artículo: `Actualizado: <mes año> · Fuentes oficiales: AEAT, BOE, IDAE...` (sácalas de la lista `fuentes` del artículo, no las pongas fijas) + tiempo de lectura **calculado** (unas 220 palabras por minuto).
5. Quita la fecha fija de la barra superior o haz que sea la fecha real de la última actualización.
6. **Páginas legales completas** (modelo LSSI-CE + RGPD + LOPDGDD):
   - **Aviso legal**: titular, NIF, domicilio, correo, objeto, responsabilidad (contenido orientativo, no sustituye a un instalador ni a un asesor fiscal), propiedad intelectual, enlaces externos, ley aplicable.
   - **Política de privacidad**: responsable, datos que se tratan (correo de contacto), finalidad, base legal, plazo de conservación, destinatarios (Cloudflare como hosting, Google AdSense, Google Search Console, la analítica que usemos), transferencias internacionales (marco UE-EE. UU.), derechos y derecho a reclamar ante la AEPD. Incluye el texto que pide Google sobre las cookies de terceros de AdSense y el enlace a cómo Google usa los datos.
   - **Política de cookies**: tabla con cada cookie (nombre, proveedor, finalidad, duración), cómo cambiar el consentimiento y enlace "Configurar cookies" en el pie que abra la CMP de Google (`googlefc.showRevocationMessage()`).
   - **Contacto**: solo correo (`hola@ahorrovatio.com`), sin formulario. Protégelo para que Cloudflare no lo cambie por "[email protected]" (envuélvelo en `<!--email_off-->...<!--/email_off-->`).
   - **Política de independencia**: añade cómo se financia la web (AdSense y, si los ponemos, enlaces de afiliados), que ningún instalador ni comercializadora paga por aparecer, y cómo corregimos errores (fecha y nota de corrección en el artículo).
   - **Aviso de afiliación**: si un artículo lleva enlaces de afiliado (por ejemplo, Amazon), pon al principio una frase clara. Para Amazon es obligatoria: "Como afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables." Marca esos enlaces con `rel="sponsored nofollow"`.
7. **Aviso de responsabilidad** corto en los artículos de impuestos y ayudas: "Información general y orientativa. Comprueba tu caso con la AEAT, tu ayuntamiento o un asesor".

## 4. Fase 3: SEO técnico

1. En cada página: `title` único (≤60 caracteres), `meta description` (140–155), `canonical` absoluto, `og:title`, `og:description`, `og:image` (1200×675), `og:type`, `twitter:card=summary_large_image`, y `<meta name="robots" content="max-image-preview:large">` (para Google Discover).
2. Datos estructurados JSON-LD:
   - Portada: `WebSite` + `Organization` (con logo).
   - Artículos: `Article` con `headline`, `description`, `image`, `datePublished`, `dateModified`, `author` (`Person` con mi nombre y `url` a `/sobre-mi/`), `publisher`; `BreadcrumbList`; y `FAQPage` generado desde el frontmatter `faq`.
   - Calculadora: `WebApplication` o `SoftwareApplication`.
3. `sitemap.xml` automático (solo páginas publicadas, con `lastmod` real) y `robots.txt` con la línea del sitemap.
4. **RSS** en `/rss.xml` con enlace `<link rel="alternate">` en el `<head>`.
5. **Botones de compartir** sencillos y sin scripts de terceros: WhatsApp, Telegram, X, Facebook, Pinterest (con la imagen) y copiar enlace.
6. Redirección **www → sin www** (301) y todo por HTTPS.
7. Migas de pan en todas las páginas interiores.
8. Comprueba con Lighthouse que la portada y un artículo sacan 90+ en rendimiento, accesibilidad, buenas prácticas y SEO en móvil.

## 5. Fase 4: estrategia de palabras clave y clusters

La lista actual de unos 70 títulos "Próximamente" es una buena base, pero hay que ordenarla.

1. **Un pilar por categoría, publicado primero.** Ahora Placas solares y Aerotermia no tienen su guía principal publicada. Propón los 5 pilares (2.500–3.500 palabras cada uno), por ejemplo:
   - Placas solares: "Precio de las placas solares en España en 2026: cuánto cuesta y cuándo se amortiza".
   - Aerotermia: "Aerotermia: qué es, cuánto cuesta y cuánto se ahorra frente al gas".
   - Tarifas: "Mejores tarifas de luz con placas solares y compensación de excedentes".
   - Subvenciones: "Ayudas para placas solares y aerotermia en 2026: IRPF, IBI, ICIO y comunidades autónomas".
   - Ahorro: "Cómo bajar la factura de la luz en casa: guía completa".
2. **Clusters:** cada artículo satélite enlaza a su pilar en el primer párrafo, y el pilar enlaza a todos sus satélites. Además, 2–4 enlaces cruzados entre categorías cuando tenga sentido (placas ↔ batería virtual ↔ IRPF ↔ IBI).
3. Para cada idea, rellena una tabla en `planificacion/keywords.md` con: keyword principal, variantes, intención (informativa / comparativa / transaccional / local), dificultad estimada, tipo de artículo, pilar al que pertenece y prioridad. Usa Google Trends, el autocompletado de Google, "Otras preguntas de los usuarios" y, cuando la web tenga datos, Search Console.
4. **Prioriza long tail con poca competencia y búsquedas reales**, sobre todo:
   - **Local**: bonificación del IBI y del ICIO **por municipio** (Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Murcia, Palma, Bilbao, Alicante... y ciudades medianas). Son artículos muy buscados y que las grandes webs cubren mal. Cada uno con tabla: % de bonificación, años, requisitos, plazo, enlace a la ordenanza fiscal vigente.
   - **Ayudas por comunidad autónoma** (aerotermia, placas, ventanas), con enlace a cada convocatoria oficial.
   - **Problemas concretos**: "error del inversor Huawei...", "aerotermia ciclos cortos", "por qué me pagan tan poco los excedentes".
   - **Comparativas X vs Y** con tabla.
   - **Preguntas de dinero**: "¿tributa...?", "¿cuánto ahorro con...?", "¿merece la pena...?".
5. Evita la canibalización: dos artículos no pueden atacar la misma keyword. Ahora, por ejemplo, "deducción IRPF placas" y "¿tributan las subvenciones?" deben quedar bien separados y enlazados entre sí.
6. Ten en cuenta la temporada: en otoño e invierno, aerotermia, calefacción y termostatos; en primavera, placas y excedentes; en marzo–junio, la Renta y el IRPF; en octubre–diciembre, las ordenanzas del IBI del año siguiente.

## 6. Fase 5: plantilla de artículo (todas las guías iguales)

Cada artículo sigue esta estructura:

1. **H1** con la keyword en forma natural.
2. **Línea de confianza** (fecha de actualización · fuentes · tiempo de lectura).
3. **Respuesta directa** en 2–3 frases con la cifra clave (lo que ya hacéis en la caja `.answer`: mantenerlo).
4. **Tabla "Resumen rápido"** (4–6 filas, solo con datos del propio artículo).
5. Índice.
6. Cuerpo con H2/H3 que respondan a preguntas reales. **Mínimo 1.200 palabras** en satélites y 2.500 en pilares, sin relleno. Obligatorio en cada uno:
   - **Al menos un ejemplo con números completos** (por ejemplo: "Familia de 4 en Valencia, 4.200 kWh/año, 7 placas de 450 Wp, presupuesto X, ahorro Y, amortización Z") explicando de dónde sale cada número.
   - Una tabla comparativa cuando haya opciones.
   - "Cuándo SÍ compensa / cuándo NO compensa".
   - Errores frecuentes.
   - Enlace al pilar y a la calculadora cuando tenga sentido.
7. Bloque **"Lo he comprobado"** (solo si hay experiencia real mía).
8. **Preguntas frecuentes** (3–6), también en el frontmatter para el JSON-LD.
9. **Fuentes** enlazadas, con el nombre del organismo y la fecha de consulta.
10. Caja de autor.

**Estilo:** tú (tuteo), frases cortas, párrafos de 2–4 líneas, negritas solo en lo importante, sin frases de relleno ni muletillas de IA ("en el mundo actual", "es crucial", "sin lugar a dudas"). Nada de promesas tipo "factura a 0 €" sin explicar la letra pequeña.

**Fuentes válidas por tema** (enlázalas siempre):
- Fiscalidad: AEAT (sede.agenciatributaria.gob.es), BOE (Ley 35/2006 del IRPF y sus disposiciones adicionales), consultas vinculantes de la DGT.
- IBI / ICIO: Real Decreto Legislativo 2/2004 (Ley de Haciendas Locales, arts. 74 y 103) y la **ordenanza fiscal vigente de cada ayuntamiento** (con el año).
- Autoconsumo: Real Decreto 244/2019, IDAE, CNMC (comparador de ofertas), REE y OMIE para precios.
- Producción solar: PVGIS (Comisión Europea).
- Aerotermia: IDAE, RITE, fichas técnicas oficiales de los fabricantes.
- Precios de mercado: indica siempre que es una horquilla orientativa, de dónde sale (presupuestos publicados, informes del sector, etc.) y la fecha.

## 7. Fase 6: revisar los 6 artículos que ya hay

Antes de escribir nada nuevo, rehaz los 6 con la plantilla de la Fase 5:

1. **Placas casa 100 m²**: subir a 1.200+ palabras; tabla por zona (norte / centro / sur) usando PVGIS con una ciudad de ejemplo de cada zona; ejemplo completo de amortización; explicar de dónde salen 4.400–5.600 €; corregir el tiempo de lectura; enlazar las fuentes.
2. **Aerotermia con radiadores**: añadir consumo en euros por mes en un ejemplo de 3 zonas climáticas; tabla de precios orientativos; cambiar "climalit" por "doble acristalamiento"; comprobar los rangos de COP con fichas técnicas o con el IDAE; enlazar al futuro pilar de aerotermia.
3. **Batería virtual**: **cumplir lo que promete el título**: tabla con las comercializadoras que la ofrecen ahora (nombre del producto, cuota mensual, precio del excedente, si sirve para otra vivienda, si se pierde el saldo al irse, fecha de consulta y enlace a la página oficial de cada oferta). Revisa todos los datos en la web de cada compañía. Si no puedes comprobar una condición, `[VERIFICAR]`.
4. **Deducción IRPF**: comprobar en la AEAT y en el BOE **hasta qué fecha están vigentes** los tramos del 20 %, 40 % y 60 % y decirlo arriba del todo; ejemplo numérico completo (factura de X €, base deducible, deducción final); cómo se pone en la declaración (casillas); qué pasa si hay subvención; enlazar a la página oficial de la AEAT.
5. **IBI Madrid**: tabla real municipio por municipio (porcentaje, años, requisitos, plazo, enlace a la ordenanza del año en curso). Si un municipio no tiene la bonificación, decirlo. Lo que no se pueda comprobar, `[VERIFICAR]`. Es el modelo para todos los artículos de IBI de otras ciudades.
6. **Termostatos**: subir a 1.200+ palabras; fuente para el "12 %–22 %" o quitar la cifra; tabla con modelo, compatibilidad (OpenTherm, contacto seco, aerotermia), precio orientativo con fecha y si hay suscripción; dejar claro que es una comparativa a partir de fichas técnicas y no una prueba en casa (salvo que yo tenga alguno); aviso de afiliación si hay enlaces.

En todos: revisar ortografía, quitar el plural "nosotros" y pasar a mi voz, enlazar fuentes y generar el PDF de revisión.

## 8. Fase 7: anuncios AdSense sin estropear la web

Ya tengo cuenta de AdSense aprobada para Ruta FP. Número de editor: **pub-6113022634993726**.

1. `ads.txt` con esta línea exacta: `google.com, pub-6113022634993726, DIRECT, f08c47fec0942fa0`
2. Un único archivo de configuración (por ejemplo `src/config.ts`) con el `client` (`ca-pub-6113022634993726`) y los `data-ad-slot` de cada bloque. Si está vacío, no se carga nada de AdSense.
3. El script de AdSense una sola vez en el `<head>`, en todas las páginas excepto las legales.
4. **Huecos como en Ruta FP** (3 bloques manuales):
   - `contenido` (display adaptable): después de la respuesta directa o la tabla resumen, después **cada ~450 palabras antes de un H2 (máximo 3)**, y antes de "Preguntas frecuentes". Nunca dos seguidos ni antes del índice.
   - `lateral` (display vertical, 300×600, fijo, solo escritorio).
   - `multiplex` al final, después de "Artículos relacionados".
5. **Un hueco sin anuncio no se ve**: nada de cajas punteadas con texto en producción (solo en modo revisión). Reserva altura mínima solo cuando el anuncio está activo, para evitar saltos (CLS).
6. Quita el aviso de cookies propio cuando esté activa la **CMP de Google** (AdSense → Privacidad y mensajes → Europa → mensaje RGPD con 3 opciones: aceptar, rechazar, gestionar). Sin CMP certificada no se pueden servir anuncios personalizados en Europa.
7. Antes de pedir la revisión de AdSense, la web debe tener: **25–30 artículos completos publicados** (Ruta FP salió con 30–40), cero `[VERIFICAR]`, páginas legales completas, contacto que funcione, sin "Próximamente", sin enlaces rotos y navegación clara.

## 9. Fase 8: imágenes con Gemini

Para cada artículo, genera un **prompt de imagen** (igual que hicimos en Ruta FP) y guárdalos todos en `planificacion/prompts-imagenes.md`:
- Formato 16:9 horizontal, estilo foto realista o ilustración limpia y coherente en toda la web (decide uno y mantenlo), colores de la marca (verde `#0f5243` y naranja `#d98218`).
- Sin texto dentro de la imagen, sin logos de marcas, sin personas reconocibles.
- Escenas españolas creíbles (tejados de teja, chalets, pisos, contadores, radiadores).
- Con su `imagenAlt` en español que describa la imagen (no metas la keyword a la fuerza).
- Yo genero las imágenes, las guardo con el nombre `<slug>.png` y tú las conviertes a WebP 1200×675 y 600 px.
- Una imagen para la portada y una para las redes (`og:image` por defecto).

## 10. Fase 9: calendario de publicación

1. Lanzamiento con **25–30 artículos** (los 5 pilares + los mejores satélites + los 6 revisados).
2. Después, **1 artículo al día de lunes a viernes a las 7:00** (hora de España), como Ruta FP.
3. Para eso: `fecha` en cada artículo + un **deploy hook de Cloudflare Pages** que se lance cada día a las 7:00 (con un GitHub Action programado `cron` o un Cron Trigger de Cloudflare). Explícame paso a paso cómo crearlo.
4. Calendario en `planificacion/calendario.md`: semana, día, número, título, slug, categoría, keyword, estado (borrador / verificado / revisado por JOAN / programado).
5. Cada 3 meses, revisar los artículos de ayudas, tarifas e IBI (cambian mucho) y actualizar la fecha `actualizado`.

## 11. Fase 10: medición

1. **Google Search Console**: propiedad de tipo dominio `ahorrovatio.com`, verificada con un registro TXT en el DNS de Cloudflare. Enviar `sitemap.xml`. Pedir indexación de las páginas principales por tandas (unas 10 al día).
2. **Analítica**: preferiblemente **Cloudflare Web Analytics** (sin cookies, no necesita consentimiento). Si quieres Google Analytics 4, tiene que ir con Consent Mode v2 conectado a la CMP de Google, y añadirlo a la política de cookies.
3. **Bing Webmaster Tools**: importar desde Search Console.
4. Un archivo `planificacion/metricas.md` donde apuntemos cada semana: páginas indexadas, impresiones, clics, CTR, posición media y las 10 consultas principales.

## 12. Fase 11: difusión

1. Las fichas `ficha-seo.md` están muy bien: mantenlas para cada artículo (título del pin, texto en la imagen, descripción).
2. **Pinterest**: cuenta de empresa, reclamar el dominio (meta etiqueta en el `<head>`), tableros por categoría, 3–5 pines por artículo en formato 1000×1500, pines enriquecidos gracias a las etiquetas `og:`.
3. **TikTok / Reels / Shorts**: guiones de 30–40 s por artículo con un gancho en los primeros 2 segundos ("¿Sabías que tu ayuntamiento te puede rebajar el IBI un 50 % por poner placas?"). Guárdalos en `difusion/guiones.md`.
4. Grupos y foros donde ayudar de verdad (sin spam): foros de autoconsumo, Reddit r/spain y r/SpainFIRE, grupos locales.

## 13. Conexiones y cuentas: qué tengo que hacer yo (explícamelo paso a paso, fácil)

Hazme una lista de comprobación en `planificacion/conexiones.md` con cada paso, dónde hacer clic y cómo sé que ha ido bien:

1. **Dominio** `ahorrovatio.com`: ¿está comprado? ¿Dónde? Cambiar sus servidores DNS a los de Cloudflare.
2. **Cloudflare**: añadir el dominio (plan gratuito), crear el proyecto de **Cloudflare Pages** conectado al repositorio de GitHub (rama `main`, comando `npm run build`, carpeta `dist`), conectar el dominio personalizado, regla de redirección www → sin www, SSL "Full (strict)".
3. **Correo**: **Cloudflare Email Routing** para que `hola@ahorrovatio.com` me llegue a mi Gmail (mi Gmail nunca aparece en la web). Probar que llega.
4. **GitHub**: repositorio `joanreinabuxo-pixel/ahorrovatio` privado; desactivar GitHub Pages cuando ya funcione Cloudflare Pages.
5. **Deploy hook** de Cloudflare Pages + tarea diaria a las 7:00 para la publicación programada.
6. **Search Console**: verificación por DNS, sitemap.
7. **AdSense**: Sitios → Añadir sitio → `ahorrovatio.com` → pegar el código → comprobar `ads.txt` → pedir revisión **solo cuando se cumpla la lista de la Fase 7**. Activar el mensaje RGPD. Crear los 3 bloques (display adaptable, display vertical, multiplex) y pasarte los números `data-ad-slot`. Excluir las páginas legales de los anuncios automáticos.
8. **Analítica**: Cloudflare Web Analytics (o GA4 con Consent Mode).
9. **Pinterest** empresa + verificación del dominio.
10. **Amazon Afiliados** (opcional, solo si hacemos comparativas de productos): alta, y aviso legal en la web.

## 14. Cómo quiero que me entregues el trabajo

- Trabaja en una rama de git por fase y explícame en 5–10 líneas qué has cambiado.
- Después de cada fase, dame la lista de lo que **yo** tengo que hacer.
- Antes de dar un artículo por acabado: ortografía revisada, cero `[VERIFICAR]`, todas las fuentes enlazadas y comprobadas, PDF de revisión en `Articulos/<número>- <título>/articulo.pdf`.
- Si tienes una duda que cambia el resultado, pregúntame. Si es menor, decide tú y dime qué has decidido.

Empieza por la **Fase 1** y, antes de tocar nada, dame un plan corto de cómo vas a hacer la migración a Astro sin cambiar ninguna URL.
