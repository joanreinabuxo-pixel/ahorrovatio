/* ==========================================================================
   AhorroVatio — main.js
   Script clásico (sin módulos). Todo el contenido importante ya está en el
   HTML: este archivo añade menú móvil, barra de lectura, calculadora solar
   y aviso de cookies.
   ========================================================================== */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  function safe(fn, name) {
    try { fn(); } catch (e) { if (window.console) console.warn("[AhorroVatio] " + name + " falló:", e); }
  }

  /* ---------- Menú móvil ---------- */
  function initNav() {
    var btn = document.querySelector(".nav-toggle");
    var nav = document.getElementById("menu");
    if (!btn || !nav) return;
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Barra de progreso de lectura (solo artículos) ---------- */
  function initProgress() {
    var bar = document.querySelector(".progress");
    var body = document.querySelector(".prose");
    if (!bar || !body) return;
    var ticking = false;
    function update() {
      var r = body.getBoundingClientRect();
      var total = r.height - window.innerHeight * 0.6;
      var p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      bar.style.width = (p * 100).toFixed(1) + "%";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ---------- Calculadora solar interactiva ---------- */
  function initSolarCalc() {
    var form = document.getElementById("solar-calc");
    if (!form) return;

    var billInput = document.getElementById("calc-bill");
    var zoneSelect = document.getElementById("calc-zone");
    var ratioSelect = document.getElementById("calc-ratio");

    var outPanels = document.getElementById("res-panels");
    var outPower = document.getElementById("res-power");
    var outCost = document.getElementById("res-cost");
    var outSavings = document.getElementById("res-savings");
    var outPayback = document.getElementById("res-payback");

    function compute() {
      var bill = Math.max(25, Math.min(800, parseFloat(billInput.value) || 100));
      var hsp = parseFloat(zoneSelect.value) || 1550; // horas sol pico/año equivalentes
      var selfRatio = parseFloat(ratioSelect.value) || 0.60;

      // Consumo anual aproximado (kWh) descontando término fijo (~22%)
      var annualKwh = ((bill * 12) * 0.78) / 0.16;
      // Potencia pico recomendada (kWp)
      var rawKwp = annualKwh / hsp;
      // Paneles de 450 Wp (0.45 kWp), mínimo 4
      var panels = Math.max(4, Math.min(24, Math.round(rawKwp / 0.45)));
      var kwp = panels * 0.45;

      // Coste estimado llave en mano en España (sin subvención, con economía de escala)
      var baseCost = 1900 + kwp * 950;
      var annualProduction = kwp * hsp;
      var selfKwh = annualProduction * selfRatio;
      var surplusKwh = annualProduction - selfKwh;
      // Ahorro autoconsumo (~0.16 €/kWh) + compensación excedentes (~0.06 €/kWh)
      var annualSavings = selfKwh * 0.16 + surplusKwh * 0.06;
      var payback = annualSavings > 0 ? baseCost / annualSavings : 0;

      outPanels.textContent = panels + " placas";
      outPower.textContent = kwp.toFixed(2).replace(".", ",") + " kWp";
      outCost.textContent = Math.round(baseCost).toLocaleString("es-ES") + " €";
      outSavings.textContent = Math.round(annualSavings).toLocaleString("es-ES") + " €/año";
      outPayback.textContent = payback.toFixed(1).replace(".", ",") + " años";
    }

    form.addEventListener("input", compute);
    form.addEventListener("change", compute);
    compute();
  }

  /* ---------- Aparición suave de tarjetas ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -5% 0px" });
    els.forEach(function (el) { io.observe(el); });
    setTimeout(function () { els.forEach(function (el) { el.classList.add("is-in"); }); }, 6000);
  }

  /* ---------- Aviso de cookies ----------
     IMPORTANTE: cuando Google apruebe AdSense, activa en tu cuenta de AdSense
     "Privacidad y mensajes > Mensaje del RGPD" (CMP certificada por Google).
     Entonces cambia USE_GOOGLE_CMP a true y este aviso propio dejará de salir. */
  var USE_GOOGLE_CMP = false;
  var KEY = "ahorrovatio_consent_v1";

  function getConsent() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function setConsent(v) {
    try { window.localStorage.setItem(KEY, v); } catch (e) { /* sin almacenamiento */ }
  }

  function initCookies() {
    if (USE_GOOGLE_CMP) return;
    if (document.querySelector(".cookie-bar")) return;
    var root = document.documentElement.getAttribute("data-root") || "";
    var bar = document.createElement("div");
    bar.className = "cookie-bar";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-labelledby", "cookie-title");
    bar.innerHTML =
      '<h2 id="cookie-title">Tu privacidad</h2>' +
      '<p>Usamos cookies propias necesarias para que la web funcione y, solo si lo aceptas, cookies de terceros para medir visitas y mostrar publicidad. ' +
      'Puedes cambiar tu decisión cuando quieras. Más información en la <a href="' + root + 'politica-cookies/">política de cookies</a>.</p>' +
      '<div class="cookie-actions">' +
      '<button type="button" class="btn btn--ghost" data-consent="rejected">Rechazar</button>' +
      '<button type="button" class="btn" data-consent="accepted">Aceptar</button>' +
      '</div>';
    bar.hidden = !!getConsent();
    document.body.appendChild(bar);

    bar.addEventListener("click", function (e) {
      var b = e.target.closest("[data-consent]");
      if (!b) return;
      setConsent(b.getAttribute("data-consent"));
      bar.hidden = true;
    });

    document.querySelectorAll("[data-open-cookies]").forEach(function (el) {
      el.addEventListener("click", function () { bar.hidden = false; });
    });
  }

  function init() {
    safe(initNav, "nav");
    safe(initProgress, "progress");
    safe(initSolarCalc, "solarCalc");
    safe(initReveal, "reveal");
    safe(initCookies, "cookies");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
