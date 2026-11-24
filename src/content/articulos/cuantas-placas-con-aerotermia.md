---
titulo: "Cuántas placas solares necesito si tengo aerotermia"
h1: "Cuántas placas solares necesito si tengo aerotermia: cálculo con ejemplo"
descripcion: "Cómo calcular cuántas placas solares necesitas con aerotermia: consumo de la bomba de calor, producción por kWp según PVGIS, ejemplo en Madrid y por qué en invierno no lo cubren todo."
categoria: placas-solares
fecha: 2026-11-24
actualizado: 2026-11-24
publicado: true
pilar: false
relacionados:
  - placas-solares/precio-placas-solares
  - placas-solares/cuantas-placas-casa-100m2
  - aerotermia/consumo-aerotermia-mes
  - tarifas-luz/excedentes-placas-solares-precio
faq:
  - q: "¿Cuántas placas necesito para la aerotermia?"
    a: "<p>Depende de lo que consuma tu bomba de calor. En mi ejemplo de 90 m² en Madrid, la calefacción con aerotermia gasta unos 1.407 kWh de luz al año con suelo radiante y unos 1.906 con radiadores. Sumados a 3.500 kWh del resto de la casa, salen 7 u 8 placas de 450 Wp, frente a las 5 que necesitaría la casa sin aerotermia.</p>"
  - q: "¿Las placas solares cubren la aerotermia en invierno?"
    a: "<p>No del todo. La calefacción se concentra en los meses de menos sol, así que en invierno seguirás comprando energía a la red. Las placas cubren mejor el agua caliente y, si la tienes, la refrigeración en verano.</p>"
  - q: "¿Merece la pena juntar placas y aerotermia?"
    a: "<p>Suele ayudar, porque la aerotermia aumenta el consumo de casa y parte de él se puede mover a las horas de sol. El InformeSolar 2025 sitúa el importe medio de placas con aerotermia en unos 16.000 €. Haz la cuenta con tu consumo y tu clima.</p>"
  - q: "¿Pongo muchas placas para cubrir todo el invierno?"
    a: "<p>No es buena idea. Para cubrir enero tendrías que poner tantas placas que en verano verterías mucho excedente, que se paga poco y por encima del tope mensual se pierde.</p>"
fuentes:
  - nombre: "Comisión Europea (JRC) — PVGIS, herramienta oficial de cálculo de producción fotovoltaica"
    url: "https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en"
  - nombre: "ECOticias — Producción por kWp en las 50 capitales según PVGIS 5.3 (consulta del 30/10/2026)"
    url: "https://www.ecoticias.com/hoyeco/cuantas-placas-solares-necesito-casa/52994/"
  - nombre: "OCU — La mejor opción para calefacción (comparativa de costes, 16/10/2026)"
    url: "https://www.ocu.org/vivienda-y-energia/pellets/consejos/mejor-opcion-para-calefaccion"
  - nombre: "Vaillant — Ficha técnica de la bomba de calor aroTHERM pure"
    url: "https://cdn.autosolar.es/pdf/fichas-tecnicas/Ficha-tecnica-Bomba-de-Calor-Aerotermia-Monobloc-4kW-Vaillant-AroTHERM-Pure.pdf"
  - nombre: "Energías Renovables — Un autoconsumo tipo cuesta 6.000 euros (InformeSolar 2025)"
    url: "https://www.energias-renovables.com/autoconsumo/un-autoconsumo-tipo-cuesta-6-000-euros-20260115"
  - nombre: "BOE — Real Decreto 244/2019, que regula el autoconsumo de energía eléctrica"
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2019-5089"
---

<div class="answer"><p>Con aerotermia necesitas <strong>más placas</strong> que sin ella, porque la bomba de calor suma consumo eléctrico. En mi ejemplo de una casa de 90 m² en Madrid que consume 3.500 kWh al año sin calefacción, la aerotermia añade unos <strong>1.407 kWh</strong> con suelo radiante o <strong>1.906 kWh</strong> con radiadores, y se pasa de <strong>5 a 7 u 8 placas</strong> de 450 Wp. Pero ojo: la calefacción se gasta en invierno, cuando las placas producen menos, así que no esperes que cubran toda la aerotermia.</p></div>

<table class="keydata">
<caption>Resumen rápido</caption>
<tr><th scope="row">Fórmula</th><td>(consumo de casa + consumo de la aerotermia) ÷ producción de 1 kWp</td></tr>
<tr><th scope="row">Aerotermia en el ejemplo (90 m², Madrid)</th><td>1.407 kWh al año con suelo radiante; 1.906 con radiadores</td></tr>
<tr><th scope="row">Producción de 1 kWp en Madrid</th><td>Unos 1.621 kWh al año (PVGIS)</td></tr>
<tr><th scope="row">Resultado del ejemplo</th><td>7 placas con suelo radiante y 8 con radiadores (frente a 5 sin aerotermia)</td></tr>
<tr><th scope="row">Límite</th><td>En invierno las placas no cubren la calefacción</td></tr>
</table>

<details class="toc" open="">
<summary>Índice de contenidos</summary>
<ol>
<li><a href="#consumo">Paso 1: cuánto consume tu aerotermia</a></li>
<li><a href="#produccion">Paso 2: cuánto produce una placa donde vives</a></li>
<li><a href="#ejemplo">Ejemplo completo en Madrid</a></li>
<li><a href="#invierno">El problema del invierno</a></li>
<li><a href="#aprovechar">Cómo aprovechar mejor las placas con aerotermia</a></li>
<li><a href="#compensa">Cuándo compensa</a></li>
<li><a href="#errores">Errores frecuentes</a></li>
<li><a href="#faq">Preguntas frecuentes</a></li>
</ol>
</details>

<h2 id="consumo">1. Paso 1: cuánto consume tu aerotermia</h2>
<p>El dato clave no es la potencia del equipo, sino los <strong>kWh de electricidad al año</strong> que va a gastar. Se calcula así, como explico en la guía de <a href="/aerotermia/consumo-aerotermia-mes/">cuánto consume la aerotermia</a>:</p>
<p><strong>demanda de calefacción ÷ SCOP del equipo = kWh de electricidad</strong></p>
<p>En mi ejemplo uso la demanda de la comparativa de la OCU para una vivienda de 90 m² en la zona climática D, como Madrid (6.500 kWh de calor al año), y el SCOP de la ficha técnica de la Vaillant aroTHERM pure:</p>
<ul>
<li>Con <strong>suelo radiante</strong> (agua a 35 °C, SCOP 4,62): 6.500 ÷ 4,62 = <strong>1.407 kWh</strong> al año.</li>
<li>Con <strong>radiadores</strong> (agua a 55 °C, SCOP 3,41): 6.500 ÷ 3,41 = <strong>1.906 kWh</strong> al año.</li>
</ul>
<p>Si la aerotermia también hace el agua caliente, súmale ese consumo: el certificado energético de tu casa da la demanda de agua caliente. Y si ya tienes la aerotermia instalada, es más fácil: la app del equipo suele mostrar la electricidad que ha consumido en el último año.</p>

<h2 id="produccion">2. Paso 2: cuánto produce una placa donde vives</h2>
<p>La herramienta oficial para saberlo es <a href="https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en" target="_blank" rel="noopener">PVGIS</a>, de la Comisión Europea. Según la recopilación de valores de PVGIS 5.3 de ECOticias, con paneles orientados al sur, inclinación óptima y un 14 % de pérdidas, 1 kWp produce al año:</p>
<div class="table-scroll">
<table class="table">
<thead><tr><th>Ciudad</th><th>kWh al año por cada kWp</th></tr></thead>
<tbody>
<tr><td>Sevilla</td><td>1.672</td></tr>
<tr><td>Valencia</td><td>1.632</td></tr>
<tr><td>Madrid</td><td>1.621</td></tr>
<tr><td>Barcelona</td><td>1.572</td></tr>
<tr><td>A Coruña</td><td>1.286</td></tr>
<tr><td>Bilbao</td><td>1.170</td></tr>
</tbody>
</table>
</div>
<p>Con estos datos, el número de paneles es: <strong>consumo total ÷ producción de 1 kWp = kWp necesarios</strong>, y luego kWp ÷ 0,45 para paneles de 450 Wp, redondeando hacia arriba. Es el mismo cálculo de la guía de <a href="/placas-solares/cuantas-placas-casa-100m2/">cuántas placas necesita una casa de 100 m²</a>.</p>

<h2 id="ejemplo">3. Ejemplo completo en Madrid</h2>
<p>Una casa en Madrid que consume <strong>3.500 kWh al año</strong> en todo lo demás (electrodomésticos, luz, cocina) y pone aerotermia para la calefacción:</p>
<div class="table-scroll">
<table class="table">
<thead><tr><th></th><th>Sin aerotermia</th><th>Aerotermia con suelo radiante</th><th>Aerotermia con radiadores</th></tr></thead>
<tbody>
<tr><td>Consumo total al año</td><td>3.500 kWh</td><td>3.500 + 1.407 = 4.907 kWh</td><td>3.500 + 1.906 = 5.406 kWh</td></tr>
<tr><td>kWp necesarios (÷ 1.621)</td><td>2,16 kWp</td><td>3,03 kWp</td><td>3,33 kWp</td></tr>
<tr><td>Placas de 450 Wp</td><td><strong>5</strong></td><td><strong>7</strong></td><td><strong>8</strong></td></tr>
<tr><td>Producción al año</td><td>Unos 3.650 kWh</td><td>Unos 5.100 kWh</td><td>Unos 5.840 kWh</td></tr>
</tbody>
</table>
</div>
<p>Con este cálculo, la instalación produce en un año más o menos lo que consume la casa. Pero producir lo mismo en el año no significa cubrir el consumo mes a mes, y con aerotermia esa diferencia es grande.</p>
<p>Si vives en el norte, el número sube: en Bilbao, cada kWp produce unos 1.170 kWh, y además la calefacción suele gastar más porque el clima es distinto. Rehaz la cuenta con tu demanda y con el dato de PVGIS de tu casa.</p>

<h2 id="invierno">4. El problema del invierno</h2>
<p>La aerotermia gasta casi toda la electricidad de la calefacción en diciembre, enero y febrero. Justo entonces las placas producen menos: los días son más cortos y el sol está más bajo. Y en verano pasa lo contrario: mucha producción y poca calefacción.</p>
<p>Eso tiene dos consecuencias:</p>
<ul>
<li>En invierno vas a <strong>seguir comprando</strong> buena parte de la electricidad de la aerotermia a la red. Por eso el precio del kWh de tu tarifa sigue siendo importante.</li>
<li>En verano vas a <strong>verter mucho excedente</strong>. Con la compensación del Real Decreto 244/2019, se paga bastante menos que el kWh que compras y, por encima del valor de la energía comprada en el mes, se pierde. Lo explico en <a href="/tarifas-luz/excedentes-placas-solares-precio/">por qué te pagan tan poco por los excedentes</a>.</li>
</ul>
<p>Para hacer bien el reparto por meses, PVGIS da también la producción mensual de tu tejado: introduce tu ubicación y compárala con tu consumo mes a mes.</p>

<h2 id="aprovechar">5. Cómo aprovechar mejor las placas con aerotermia</h2>
<ol>
<li><strong>Programa el agua caliente en las horas de sol.</strong> El depósito acumula el calor y lo usas por la tarde o la noche. Es el consumo de la aerotermia que mejor encaja con las placas todo el año.</li>
<li><strong>Calienta la casa al mediodía en los días de sol de invierno.</strong> Con suelo radiante, que guarda el calor, puedes subir un poco la consigna en las horas centrales y bajarla por la tarde.</li>
<li><strong>Refresca en verano</strong> si tu equipo y tu instalación lo permiten: es consumo justo cuando más producen las placas.</li>
<li><strong>Revisa la tarifa.</strong> En invierno manda el precio del kWh comprado; en verano, el precio del excedente.</li>
<li><strong>Valora la batería virtual</strong> si pierdes excedente varios meses al año.</li>
</ol>

<h2 id="compensa">6. Cuándo compensa</h2>
<ul>
<li><strong>Si ya tienes aerotermia o vas a ponerla</strong>, ampliar la instalación de placas uno o dos paneles suele tener sentido, porque aumenta el consumo que puedes cubrir de día, sobre todo con el agua caliente.</li>
<li><strong>Si haces las dos cosas a la vez</strong>, el InformeSolar 2025 sitúa el importe medio de una instalación de placas con aerotermia en unos 16.000 €, frente a unos 6.000 € de una instalación de placas tipo de 5 kWp. Tienes las ayudas para las dos en la guía de <a href="/subvenciones/ayudas-placas-solares-aerotermia/">ayudas para placas solares y aerotermia</a>.</li>
<li><strong>Si quieres cubrir todo el invierno con placas</strong>, no compensa: tendrías una instalación enorme con mucho excedente mal pagado en verano.</li>
</ul>
<p>Los precios de las placas solas los tienes en la guía del <a href="/placas-solares/precio-placas-solares/">precio de las placas solares</a>.</p>

<h2 id="errores">7. Errores frecuentes</h2>
<ul>
<li><strong>Sumar la potencia del equipo en lugar de su consumo.</strong> Una bomba de calor de 8 kW no gasta 8 kW: lo que importa son los kWh de luz al año.</li>
<li><strong>Calcular con el balance anual y creer que cubres el invierno.</strong> En enero las placas cubren poco de la calefacción.</li>
<li><strong>Olvidar el agua caliente</strong>, que es el consumo de la aerotermia que mejor se adapta al sol.</li>
<li><strong>Usar la producción de otra ciudad.</strong> En el norte 1 kWp produce bastante menos que en el sur.</li>
<li><strong>Dimensionar sin pensar en el excedente del verano.</strong> Más placas no siempre es más ahorro.</li>
</ul>

<div class="callout">
<strong>Mi consejo</strong>
<p>Calcula las placas con el consumo real de tu casa más el de la aerotermia, y no con el objetivo de cubrir el invierno. Después, programa el agua caliente en las horas de sol: es lo que más partido saca a las dos instalaciones juntas.</p>
</div>
