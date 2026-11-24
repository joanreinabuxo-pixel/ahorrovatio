---
titulo: "Cuántas placas solares necesito para una casa de 100 m² en España"
h1: "Cuántas placas solares necesito para una casa de 100 m² en España"
descripcion: "Calcula cuántas placas necesita una casa de 100 m² a partir de tu consumo en kWh y de lo que produce un panel en tu ciudad según PVGIS, con tabla y ejemplo."
categoria: placas-solares
fecha: 2026-11-24
actualizado: 2026-11-24
publicado: true
pilar: false
relacionados:
  - tarifas-luz/bateria-virtual-placas-solares
  - subvenciones/deduccion-irpf-placas-solares
  - subvenciones/bonificacion-ibi-placas-solares-madrid
  - aerotermia/aerotermia-radiadores-convencionales
faq:
  - q: "¿Cuántas placas necesita una casa de 100 m²?"
    a: "<p>Depende de tu consumo, no de los metros. Con un consumo de 3.500 kWh al año salen unas 5 placas de 450 Wp en Madrid, Valencia o Sevilla, y unas 7 en Bilbao. Con 5.000 kWh al año, unas 7 en el centro y el sur y unas 10 en el norte. Son cifras para producir en un año lo mismo que consumes.</p>"
  - q: "¿Dónde veo mi consumo anual?"
    a: "<p>En tus facturas de la luz o en el área de clientes de tu distribuidora, que guarda las lecturas de tu contador. Suma los kWh de los últimos 12 meses. Si tienes facturas bimestrales, suma seis.</p>"
  - q: "¿Conviene poner más placas por si en el futuro tengo aerotermia o coche eléctrico?"
    a: "<p>Conviene preverlo. Pide al instalador un inversor con margen para añadir paneles más adelante y deja espacio libre en el tejado. Lo que no conviene es poner hoy muchos más paneles de los que vas a usar, porque el excedente se paga barato.</p>"
  - q: "¿Necesito una batería física?"
    a: "<p>No es obligatoria. Sin batería, lo que no consumes en el momento se vierte a la red y se compensa en la factura. Si quieres aprovechar el excedente de verano, mira antes cómo funciona la <a href=\"/tarifas-luz/bateria-virtual-placas-solares/\">batería virtual</a>.</p>"
  - q: "¿Produce lo mismo una placa en el norte que en el sur?"
    a: "<p>No. Según los datos de PVGIS, 1 kWp bien orientado produce unos 1.170 kWh al año en Bilbao y unos 1.672 en Sevilla. En el norte necesitas más paneles para el mismo consumo.</p>"
fuentes:
  - nombre: "Comisión Europea (JRC) — PVGIS, herramienta oficial de cálculo de producción fotovoltaica"
    url: "https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en"
  - nombre: "ECOticias — Producción por kWp en las 50 capitales según PVGIS 5.3 (consulta del 30/10/2026)"
    url: "https://www.ecoticias.com/hoyeco/cuantas-placas-solares-necesito-casa/52994/"
  - nombre: "BOE — Real Decreto 244/2019, que regula el autoconsumo de energía eléctrica"
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2019-5089"
  - nombre: "Endesa — Endesa Solar Plus & Batería Virtual (precio del excedente)"
    url: "https://www.endesa.com/es/luz-y-gas/catalogo-solar/endesa-solar-plus-bateria-virtual"
---

<div class="answer"><p>Una casa de 100 m² no necesita un número fijo de placas: lo que manda es <strong>cuántos kWh consumes al año</strong> y <strong>dónde vives</strong>. Como referencia, con 3.500 kWh al año salen unas <strong>5 placas de 450 Wp</strong> en Madrid, Valencia o Sevilla y unas <strong>7 en Bilbao</strong>. Con 5.000 kWh, unas 7 en el centro y el sur y unas 10 en el norte.</p></div>

<table class="keydata">
<caption>Resumen rápido</caption>
<tr><th scope="row">Dato que necesitas</th><td>Tu consumo de los últimos 12 meses, en kWh (está en tus facturas)</td></tr>
<tr><th scope="row">Lo que produce 1 kWp al año (PVGIS)</th><td>Unos 1.170 kWh en Bilbao, 1.621 en Madrid y 1.672 en Sevilla</td></tr>
<tr><th scope="row">Fórmula</th><td>kWp = consumo anual ÷ producción de 1 kWp en tu ciudad</td></tr>
<tr><th scope="row">Placas de 450 Wp</th><td>kWp ÷ 0,45, redondeando hacia arriba</td></tr>
<tr><th scope="row">Ejemplo</th><td>3.500 kWh en Madrid: 2,16 kWp, es decir, 5 placas</td></tr>
</table>

<details class="toc" open="">
<summary>Índice de contenidos</summary>
<ol>
<li><a href="#por-que-no-m2">Por qué los metros cuadrados no sirven para calcular</a></li>
<li><a href="#consumo">Paso 1: averigua tu consumo anual</a></li>
<li><a href="#produccion">Paso 2: cuánto produce una placa en tu ciudad</a></li>
<li><a href="#tabla">Tabla: cuántas placas según consumo y ciudad</a></li>
<li><a href="#ejemplo">Ejemplo completo: una familia en Madrid</a></li>
<li><a href="#tejado">Cuánto espacio ocupan en el tejado</a></li>
<li><a href="#errores">Errores frecuentes al dimensionar</a></li>
<li><a href="#faq">Preguntas frecuentes</a></li>
</ol>
</details>

<h2 id="por-que-no-m2">1. Por qué los metros cuadrados no sirven para calcular</h2>
<p>Esta guía forma parte de la sección de <a href="/placas-solares/">placas solares</a>, y empieza por lo más importante: las placas se calculan por la electricidad que gastas, no por el tamaño de la casa.</p>
<p>Dos viviendas de 100 m² pueden gastar cantidades muy distintas:</p>
<ul>
<li>Una casa con <strong>calefacción y agua caliente de gas</strong> solo usa electricidad para los electrodomésticos, la cocina, la iluminación y, a veces, el aire acondicionado.</li>
<li>Una casa <strong>totalmente eléctrica</strong>, con termo eléctrico o <a href="/aerotermia/aerotermia-radiadores-convencionales/">aerotermia</a>, puede gastar el doble o más, porque la calefacción y el agua caliente también van con electricidad.</li>
</ul>
<p>Además, el mismo panel produce mucho menos en el Cantábrico que en Andalucía. Por eso el cálculo necesita dos datos: tu consumo y tu ubicación.</p>

<h2 id="consumo">2. Paso 1: averigua tu consumo anual</h2>
<p>Coge las facturas de la luz de los últimos 12 meses y suma los kWh consumidos. Si tus facturas son bimestrales, suma seis. También puedes verlo en el área de clientes de tu distribuidora (la empresa dueña del contador, que depende de la zona), donde aparecen las lecturas mes a mes.</p>
<p>Mira también <strong>cuándo</strong> consumes. Las placas producen de día. Si en casa se gasta sobre todo por la noche, aprovecharás menos energía en el momento y verterás más a la red.</p>
<div class="callout">
<strong>Si vas a cambiar algo pronto</strong>
<p>Si piensas pasar a aerotermia o comprar un coche eléctrico en los próximos años, súmalo ahora al cálculo o, al menos, díselo al instalador para que deje margen.</p>
</div>

<h2 id="produccion">3. Paso 2: cuánto produce una placa en tu ciudad</h2>
<p>La herramienta oficial para saberlo es <a href="https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en" target="_blank" rel="noopener">PVGIS</a>, de la Comisión Europea. Es gratuita: marcas tu casa en el mapa y te dice cuántos kWh al año produce 1 kWp de paneles.</p>
<p>Estos son los valores de PVGIS 5.3 para algunas capitales, con paneles fijos orientados al sur, la inclinación óptima y un 14 % de pérdidas del sistema (recopilación de <a href="https://www.ecoticias.com/hoyeco/cuantas-placas-solares-necesito-casa/52994/" target="_blank" rel="noopener">ECOticias</a> consultando PVGIS el 30 de octubre de 2026):</p>
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
<p>Si tu tejado no mira al sur, tiene otra inclinación o le dan sombras, la producción será menor. Para un cálculo fiable, mete tu dirección en PVGIS con la orientación real de tu tejado.</p>

<h2 id="tabla">4. Tabla: cuántas placas según consumo y ciudad</h2>
<p>He calculado cuántos paneles de 450 Wp hacen falta para que la instalación produzca en un año lo mismo que consumes. La cuenta es la del resumen: consumo ÷ producción por kWp, y el resultado ÷ 0,45, redondeando hacia arriba.</p>
<div class="table-scroll">
<table class="table">
<thead><tr><th>Consumo anual</th><th>Sevilla</th><th>Madrid</th><th>Valencia</th><th>Barcelona</th><th>Bilbao</th></tr></thead>
<tbody>
<tr><td>2.500 kWh</td><td>4</td><td>4</td><td>4</td><td>4</td><td>5</td></tr>
<tr><td>3.500 kWh</td><td>5</td><td>5</td><td>5</td><td>5</td><td>7</td></tr>
<tr><td>5.000 kWh</td><td>7</td><td>7</td><td>7</td><td>8</td><td>10</td></tr>
<tr><td>7.000 kWh</td><td>10</td><td>10</td><td>10</td><td>10</td><td>14</td></tr>
</tbody>
</table>
</div>
<p>Dos matices importantes:</p>
<ul>
<li><strong>Producir lo mismo que consumes no significa no pagar luz.</strong> En verano te sobrará energía y en invierno te faltará. Lo que sobra se compensa en la factura, pero a un precio bastante más bajo que el de la energía que compras.</li>
<li>Por eso muchas instalaciones se quedan algo por debajo de esa cifra. Poner más placas de la cuenta suele salir peor, porque cada kWh extra se valora a precio de excedente.</li>
</ul>

<h2 id="ejemplo">5. Ejemplo completo: una familia en Madrid</h2>
<p>Este ejemplo es ilustrativo. Los datos de producción salen de PVGIS; el precio de la luz y el porcentaje de autoconsumo son supuestos para que se entienda la cuenta, y en tu caso serán otros.</p>
<ul>
<li><strong>Consumo:</strong> 3.500 kWh al año, con calefacción de gas.</li>
<li><strong>Tamaño:</strong> 3.500 ÷ 1.621 = 2,16 kWp. Con paneles de 450 Wp, 2,16 ÷ 0,45 = 4,8, así que <strong>5 placas</strong> (2,25 kWp).</li>
<li><strong>Producción:</strong> 2,25 kWp × 1.621 kWh = unos <strong>3.650 kWh al año</strong>.</li>
<li><strong>Autoconsumo (supuesto):</strong> si en casa usas en el momento el 40 % de lo que producen, son unos 1.460 kWh que dejas de comprar. A un precio supuesto de 0,15 €/kWh, ahorras unos <strong>219 €</strong>.</li>
<li><strong>Excedente:</strong> los otros 2.190 kWh salen a la red. Pagados, por ejemplo, a 0,06 €/kWh (el precio sin impuestos que publica Endesa en su oferta solar), suman unos <strong>131 €</strong> como máximo, siempre que quepan en la compensación de cada mes.</li>
<li><strong>Total:</strong> unos 350 € al año en este supuesto.</li>
</ul>
<p>Para saber en cuántos años se paga, divide el precio de tu presupuesto entre tu ahorro anual. En este ejemplo, cada 1.000 € de instalación tardaría unos 2,9 años en recuperarse. A eso puedes restar las ayudas: la <a href="/subvenciones/deduccion-irpf-placas-solares/">deducción del IRPF</a> y, según el municipio, la <a href="/subvenciones/bonificacion-ibi-placas-solares-madrid/">bonificación del IBI</a>.</p>
<p>El dato que más cambia el resultado es el autoconsumo. Si pones la lavadora, el lavavajillas o el termo durante las horas de sol, el ahorro sube bastante.</p>

<h2 id="tejado">6. Cuánto espacio ocupan en el tejado</h2>
<p>Un panel residencial de unos 450 Wp ocupa alrededor de 2 m², aunque la medida exacta cambia según el modelo: compruébala en su ficha técnica. Para 5 paneles necesitarás algo más de 10 m² útiles y para 10 paneles, algo más de 20 m², más el espacio de paso y de fijación.</p>
<p>Lo ideal es un tejado orientado al sur y sin sombras de chimeneas, antenas, árboles o edificios cercanos. Una orientación este-oeste también funciona, con algo menos de producción al mediodía y más repartida durante el día.</p>

<h2 id="errores">7. Errores frecuentes al dimensionar</h2>
<ul>
<li><strong>Calcular por metros cuadrados.</strong> Dos casas iguales pueden necesitar el doble de paneles.</li>
<li><strong>Usar la producción del sur estando en el norte.</strong> En Bilbao 1 kWp produce cerca de un 30 % menos que en Sevilla.</li>
<li><strong>Poner muchas placas «por si acaso».</strong> El excedente se paga barato y la compensación tiene un tope mensual.</li>
<li><strong>Olvidar las sombras.</strong> Una sombra sobre parte de los paneles puede bajar la producción de todo el conjunto si el inversor no lo gestiona bien. Pregúntalo al instalador.</li>
<li><strong>No pedir varios presupuestos.</strong> Compara qué incluye cada uno: paneles, inversor, estructura, legalización y garantías.</li>
</ul>
<div class="callout">
<strong>Antes de pedir presupuesto</strong>
<p>Ten a mano tu consumo anual, la orientación de tu tejado y si piensas electrificar algo más. Con esos tres datos, cualquier instalador te podrá dar una propuesta ajustada. Para una primera estimación, prueba la <a href="/calculadoras/">calculadora solar</a>.</p>
</div>
