---
titulo: "Cómo calcular la amortización de tus placas solares"
h1: "Cómo calcular la amortización de una instalación fotovoltaica, paso a paso"
descripcion: "La fórmula para saber en cuántos años se pagan tus placas solares, con un ejemplo en Madrid, tablas según el autoconsumo y el precio de la luz, y qué ayudas acortan el plazo."
categoria: placas-solares
fecha: 2026-11-24
actualizado: 2026-11-24
publicado: true
pilar: false
relacionados:
  - placas-solares/precio-placas-solares
  - placas-solares/cuantas-placas-casa-100m2
  - subvenciones/ayudas-placas-solares-aerotermia
  - placas-solares/bateria-fisica-o-virtual
faq:
  - q: "¿En cuántos años se amortizan las placas solares?"
    a: "<p>Depende sobre todo de cuánta energía consumes en el momento en que se produce. En mi ejemplo de 5 kWp en Madrid por 6.000 €, entre unos 5,7 y 8,3 años sin ayudas, según el autoconsumo. Con la deducción del IRPF del 40 %, entre 3,4 y 5 años. El InformeSolar 2025 habla de menos de 6 años para una instalación tipo.</p>"
  - q: "¿Cómo se calcula la amortización?"
    a: "<p>Divide el coste neto de la instalación (precio menos ayudas) entre el ahorro anual. El ahorro es la energía que autoconsumes por el precio del kWh que dejas de comprar, más lo que te compensan por los excedentes.</p>"
  - q: "¿Qué hace que tarde más en amortizarse?"
    a: "<p>Consumir poco durante el día, vivir en una zona con menos sol, tener un kWh barato, perder excedente por el tope mensual de la compensación o pagar un precio alto por la instalación.</p>"
  - q: "¿Una batería acorta la amortización?"
    a: "<p>Normalmente la alarga, porque cuesta varios miles de euros y el ahorro que añade es pequeño. Lo calculo en la guía de batería física o virtual.</p>"
fuentes:
  - nombre: "Energías Renovables — Un autoconsumo tipo cuesta 6.000 euros (InformeSolar 2025)"
    url: "https://www.energias-renovables.com/autoconsumo/un-autoconsumo-tipo-cuesta-6-000-euros-20260115"
  - nombre: "Comisión Europea (JRC) — PVGIS, herramienta oficial de cálculo de producción fotovoltaica"
    url: "https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en"
  - nombre: "ECOticias — Producción por kWp en las 50 capitales según PVGIS 5.3 (consulta del 30/10/2026)"
    url: "https://www.ecoticias.com/hoyeco/cuantas-placas-solares-necesito-casa/52994/"
  - nombre: "Endesa — Endesa Solar Plus (precios de energía, potencia y excedentes)"
    url: "https://www.endesa.com/es/luz-y-gas/catalogo-solar/endesa-solar-plus"
  - nombre: "BOE — Real Decreto 244/2019, que regula el autoconsumo de energía eléctrica"
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2019-5089"
  - nombre: "Agencia Tributaria — Deducciones por obras de mejora de la eficiencia energética de viviendas"
    url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota/deducciones-obras-mejora-eficiencia-energetica-viviendas.html"
---

<div class="answer"><p>La amortización de unas placas solares se calcula así: <strong>coste neto ÷ ahorro anual = años</strong>. El ahorro anual es la energía que <strong>autoconsumes</strong> por el precio del kWh que dejas de comprar, más lo que te <strong>compensan</strong> por los excedentes. En mi ejemplo de una instalación de 5 kWp en Madrid por 6.000 €, sale entre <strong>5,7 y 8,3 años</strong> sin ayudas y entre <strong>3,4 y 5 años</strong> con la deducción del IRPF del 40 %. Lo que más cambia el resultado es cuánto consumes mientras brilla el sol.</p></div>

<table class="keydata">
<caption>Resumen rápido</caption>
<tr><th scope="row">Fórmula</th><td>Coste neto ÷ ahorro anual = años de amortización</td></tr>
<tr><th scope="row">Ahorro anual</th><td>kWh autoconsumidos × precio del kWh + excedente compensado</td></tr>
<tr><th scope="row">Precio de referencia</th><td>Unos 6.000 € por 5 kWp (InformeSolar 2025)</td></tr>
<tr><th scope="row">Ejemplo en Madrid</th><td>5,7–8,3 años sin ayudas; 3,4–5 con IRPF del 40 %</td></tr>
<tr><th scope="row">Lo que más influye</th><td>El porcentaje de autoconsumo</td></tr>
</table>

<details class="toc" open="">
<summary>Índice de contenidos</summary>
<ol>
<li><a href="#formula">La fórmula en cinco pasos</a></li>
<li><a href="#ejemplo">Ejemplo completo en Madrid</a></li>
<li><a href="#autoconsumo">Cómo cambia según el autoconsumo</a></li>
<li><a href="#precio">Cómo cambia según el precio de la luz</a></li>
<li><a href="#ayudas">Las ayudas que acortan el plazo</a></li>
<li><a href="#mas-alla">Lo que la fórmula simple no cuenta</a></li>
<li><a href="#compensa">Cuándo compensa y cuándo no</a></li>
<li><a href="#errores">Errores frecuentes</a></li>
<li><a href="#faq">Preguntas frecuentes</a></li>
</ol>
</details>

<h2 id="formula">1. La fórmula en cinco pasos</h2>
<ol>
<li><strong>Producción al año.</strong> kWp de la instalación × kWh que produce 1 kWp en tu zona. El dato oficial lo da <a href="https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en" target="_blank" rel="noopener">PVGIS</a>: en Madrid, unos 1.621 kWh por kWp según la recopilación de PVGIS 5.3 de ECOticias.</li>
<li><strong>Autoconsumo.</strong> La parte de la producción que gastas en el mismo momento. Es el dato más difícil: depende de si hay alguien en casa de día y de si programas los aparatos. Si ya tienes placas, la app del inversor te lo dice.</li>
<li><strong>Ahorro por autoconsumo.</strong> kWh autoconsumidos × precio del kWh de tu tarifa.</li>
<li><strong>Ahorro por excedentes.</strong> kWh vertidos × precio del excedente, teniendo en cuenta que, según el Real Decreto 244/2019, la compensación no puede superar el valor de la energía comprada en el mes. En verano una parte se pierde.</li>
<li><strong>Años.</strong> (Precio de la instalación − ayudas) ÷ (ahorro por autoconsumo + ahorro por excedentes).</li>
</ol>
<p>Si todavía no has calculado el tamaño, empieza por la guía de <a href="/placas-solares/cuantas-placas-casa-100m2/">cuántas placas necesita una casa de 100 m²</a>.</p>

<h2 id="ejemplo">2. Ejemplo completo en Madrid</h2>
<p>Uso el mismo caso que en la guía del <a href="/placas-solares/precio-placas-solares/">precio de las placas solares</a>. El precio es el importe medio del InformeSolar 2025 y los precios de la luz son los de Endesa Solar Plus sin impuestos. El autoconsumo y el consumo de la casa son supuestos.</p>
<ul>
<li><strong>La casa:</strong> consume 5.000 kWh al año e instala 5 kWp por 6.000 €.</li>
<li><strong>Producción:</strong> 5 × 1.621 = unos <strong>8.100 kWh</strong> al año.</li>
<li><strong>Autoconsumo del 40 %:</strong> 3.240 kWh × 0,1849 € = unos <strong>599 €</strong>.</li>
<li><strong>Excedente:</strong> 4.860 kWh × 0,06 € = unos 292 €. Supongo que se compensa el 80 % y el resto se pierde por el tope en verano: unos <strong>233 €</strong>.</li>
<li><strong>Ahorro anual:</strong> unos <strong>832 €</strong>.</li>
<li><strong>Amortización:</strong> 6.000 ÷ 832 = unos <strong>7,2 años</strong>.</li>
</ul>

<h2 id="autoconsumo">3. Cómo cambia según el autoconsumo</h2>
<p>Con la misma instalación, el mismo precio y el mismo supuesto de compensación, cambiando solo el porcentaje de autoconsumo:</p>
<div class="table-scroll">
<table class="table">
<thead><tr><th>Autoconsumo</th><th>Ahorro por autoconsumo</th><th>Excedente compensado</th><th>Ahorro anual</th><th>Años sin ayudas</th><th>Años con IRPF del 40 %</th></tr></thead>
<tbody>
<tr><td>30 %</td><td>449 €</td><td>272 €</td><td>721 €</td><td>8,3</td><td>5,0</td></tr>
<tr><td>40 %</td><td>599 €</td><td>233 €</td><td>832 €</td><td>7,2</td><td>4,3</td></tr>
<tr><td>50 %</td><td>749 €</td><td>194 €</td><td>943 €</td><td>6,4</td><td>3,8</td></tr>
<tr><td>60 %</td><td>899 €</td><td>156 €</td><td>1.054 €</td><td>5,7</td><td>3,4</td></tr>
</tbody>
</table>
</div>
<p>Cada kWh que pasas de verterlo a consumirlo vale 0,1849 € en lugar de 0,06 €. Por eso <strong>mover consumos a las horas de sol</strong> (lavadora, lavavajillas, termo, aerotermia) acorta la amortización más que cualquier otra cosa. Lo explico en <a href="/tarifas-luz/excedentes-placas-solares-precio/">por qué te pagan tan poco por los excedentes</a>.</p>

<h2 id="precio">4. Cómo cambia según el precio de la luz</h2>
<p>Con un autoconsumo del 40 % y el mismo excedente, cambiando el precio del kWh que dejas de comprar:</p>
<div class="table-scroll">
<table class="table">
<thead><tr><th>Precio del kWh</th><th>Ahorro anual</th><th>Años sin ayudas</th></tr></thead>
<tbody>
<tr><td>0,15 €</td><td>719 €</td><td>8,3</td></tr>
<tr><td>0,1849 € (Endesa Solar Plus)</td><td>832 €</td><td>7,2</td></tr>
<tr><td>0,22 €</td><td>946 €</td><td>6,3</td></tr>
</tbody>
</table>
</div>
<p>Cuanto más cara está la luz, antes se pagan las placas. El precio no es fijo durante toda la vida de la instalación, así que conviene mirar varios escenarios en lugar de uno.</p>

<h2 id="ayudas">5. Las ayudas que acortan el plazo</h2>
<ul>
<li><strong>Deducción del IRPF</strong> por obras de mejora de la eficiencia energética. En el ejemplo, el 40 % de 6.000 € son 2.400 €, y el coste neto baja a 3.600 €. Exige dos certificados energéticos y una reducción mínima del consumo de energía primaria no renovable, y tiene plazos.</li>
<li><strong>Bonificación del IBI</strong>, si tu ayuntamiento la tiene: un descuento del recibo durante varios años.</li>
<li><strong>Bonificación del ICIO</strong>, el impuesto de la obra, también según el municipio.</li>
</ul>
<p>Con la deducción del 40 % y una bonificación del IBI de 250 € al año durante 5 años, el ejemplo baja a unos 2,8 años, como muestro en la guía del precio. Los requisitos y plazos de cada ayuda están en la guía de <a href="/subvenciones/ayudas-placas-solares-aerotermia/">ayudas para placas solares y aerotermia</a>.</p>

<h2 id="mas-alla">6. Lo que la fórmula simple no cuenta</h2>
<ul>
<li><strong>Los impuestos.</strong> El kWh que no compras también te ahorra su impuesto eléctrico y su IVA, así que el ahorro en la factura es algo mayor que el de la cuenta sin impuestos.</li>
<li><strong>La potencia contratada.</strong> No cambia con las placas: se paga igual.</li>
<li><strong>El mantenimiento y el inversor.</strong> Las placas apenas necesitan mantenimiento, pero el inversor puede tener que cambiarse en algún momento. Revisa las garantías de tu presupuesto y aparta algo para eso.</li>
<li><strong>La pérdida de rendimiento</strong> de los paneles con los años, que indica la garantía de producción del fabricante.</li>
<li><strong>La financiación.</strong> Si pagas a plazos, suma los intereses al coste.</li>
</ul>

<h2 id="compensa">7. Cuándo compensa y cuándo no</h2>
<ul>
<li><strong>Compensa más</strong> si hay gente en casa de día, si vives en el centro o el sur, si tienes aerotermia o coche eléctrico que puedas cargar con sol, y si aprovechas las ayudas.</li>
<li><strong>Compensa menos</strong> si la casa está vacía todo el día, si vives en una zona con poco sol, si el tejado tiene sombras o si te ofrecen un precio muy por encima de la media.</li>
<li><strong>No compensa poner más placas de las que puedes aprovechar</strong>: el excedente se paga poco y, por encima del tope, se pierde.</li>
<li><strong>Una batería física normalmente alarga el plazo.</strong> Lo calculo en <a href="/placas-solares/bateria-fisica-o-virtual/">batería física o virtual</a>.</li>
</ul>

<h2 id="errores">8. Errores frecuentes</h2>
<ul>
<li><strong>Suponer que consumes toda la producción.</strong> Es el error que da los plazos más optimistas.</li>
<li><strong>Valorar el excedente al precio del kWh comprado.</strong> Se paga bastante menos.</li>
<li><strong>Olvidar el tope mensual</strong> de la compensación en verano.</li>
<li><strong>Contar con ayudas sin comprobar requisitos y plazos.</strong></li>
<li><strong>Comparar presupuestos sin pasar a €/Wp.</strong> Divide el precio entre los vatios pico para comparar.</li>
</ul>

<div class="callout">
<strong>Mi consejo</strong>
<p>Haz la cuenta con tres porcentajes de autoconsumo (30, 40 y 50 %) en lugar de uno. Si con el más bajo los años te siguen pareciendo razonables, la instalación tiene sentido. Si solo sale bien con el más alto, revisa el tamaño o tus hábitos antes de firmar.</p>
</div>
