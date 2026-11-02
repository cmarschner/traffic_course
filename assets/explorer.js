// Objective explorer: ranks four hypothetical corridor plans under different readings of W.
// All quantities are illustrative changes relative to "do nothing" for one 3 km urban arterial
// (~30,000 vehicles/day). They are teaching numbers, not empirical estimates.
(function () {
  "use strict";

  // Physical effects per year. hours = net user benefit in person-hour equivalents
  // (short run: fixed demand; long run: after induced demand, mode shift, rerouting).
  // pay = money users pay in tolls/fares (M€, a transfer that reappears as revenue).
  // vkm = change in motor-vehicle km (M); active = change in walking/cycling km (M);
  // ksi = change in killed or seriously injured per year; land = change in road/parking land (ha);
  // capex = annualised capital cost (M€); opex = operating & maintenance (M€); rev = revenue (M€).
  var PLANS = [
    { id: "widen", name: "A · Widen 4 → 6 lanes",
      short: { hours: 0.40, vkm: 0.5, active: -0.1, ksi: 1.0 },
      long:  { hours: 0.10, vkm: 6.0, active: -0.3, ksi: 1.5 },
      pay: 0, land: 2.5, capex: 4.0, opex: 0.3, rev: 0 },
    { id: "diet", name: "B · Road diet: 2 lanes, protected bike lanes, compact roundabouts",
      short: { hours: -0.25, vkm: -0.5, active: 1.5, ksi: -2.5 },
      long:  { hours: -0.05, vkm: -4.0, active: 3.0, ksi: -3.0 },
      pay: 0, land: -1.5, capex: 1.5, opex: 0.1, rev: 0 },
    { id: "brt", name: "C · Bus rapid transit in 2 converted lanes",
      short: { hours: 0.15, vkm: -1.0, active: 0.5, ksi: -0.8 },
      long:  { hours: 0.45, vkm: -5.0, active: 0.8, ksi: -1.0 },
      pay: 0.6, land: 0, capex: 3.0, opex: 1.2, rev: 0.6 },
    { id: "price", name: "D · Congestion charge, no construction",
      short: { hours: 0.20, vkm: -4.0, active: 0.4, ksi: -0.6 },
      long:  { hours: 0.20, vkm: -5.0, active: 0.6, ksi: -0.8 },
      pay: 6.0, land: 0, capex: 1.0, opex: 2.0, rev: 6.0 }
  ];

  var CO2_T_PER_MVKM = 170; // tonnes CO2 per million vehicle-km (≈170 g/km)

  // Presets: illustrative caricatures of each tradition's emphasis (see Module 1, section 5).
  // They are NOT official national parameter values; see Modules 2, 3 and 14 for those.
  var PRESETS = {
    classic:     { label: "Classic traffic engineering (min vehicle-hours, fixed demand)",
                   horizon: "short", vtts: 15, carbon: 0, airnoise: 0, ksi: 0, health: 0, land: 0, mu: 0, cSafety: false, cCarbon: false, cLand: false },
    us:          { label: "United States — federal benefit–cost guidance",
                   horizon: "short", vtts: 18, carbon: 50, airnoise: 0.02, ksi: 1.2, health: 0, land: 0, mu: 0, cSafety: false, cCarbon: false, cLand: false },
    germany:     { label: "Germany — BVWP-style CBA plus urban 'avoid–shift–improve'",
                   horizon: "long", vtts: 12, carbon: 240, airnoise: 0.04, ksi: 0.8, health: 0.3, land: 20, mu: 0, cSafety: false, cCarbon: true, cLand: false },
    japan:       { label: "Japan — MLIT road manual (time, operating cost, crashes)",
                   horizon: "short", vtts: 20, carbon: 0, airnoise: 0, ksi: 1.0, health: 0, land: 60, mu: 0, cSafety: false, cCarbon: false, cLand: false },
    singapore:   { label: "Singapore — access under a hard land constraint",
                   horizon: "long", vtts: 15, carbon: 50, airnoise: 0.03, ksi: 1.0, health: 0.2, land: 300, mu: 0, cSafety: false, cCarbon: false, cLand: true },
    netherlands: { label: "Netherlands — MKBA with health and Sustainable Safety",
                   horizon: "long", vtts: 11, carbon: 150, airnoise: 0.04, ksi: 1.0, health: 1.0, land: 30, mu: 0, cSafety: false, cCarbon: false, cLand: false },
    sweden:      { label: "Sweden — ASEK values plus Vision Zero constraint",
                   horizon: "long", vtts: 10, carbon: 500, airnoise: 0.04, ksi: 1.2, health: 0.5, land: 10, mu: 0.3, cSafety: true, cCarbon: false, cLand: false },
    france:      { label: "France — socio-economic appraisal, high carbon value",
                   horizon: "long", vtts: 12, carbon: 250, airnoise: 0.05, ksi: 1.0, health: 0.5, land: 20, mu: 0.2, cSafety: false, cCarbon: true, cLand: false }
  };

  var $ = function (id) { return document.getElementById(id); };
  var SLIDERS = ["vtts", "carbon", "airnoise", "ksi", "health", "land", "mu"];
  var CHECKS = ["cSafety", "cCarbon", "cLand"];

  function params() {
    var p = { horizon: $("horizon").value };
    SLIDERS.forEach(function (k) { p[k] = parseFloat($(k).value); });
    CHECKS.forEach(function (k) { p[k] = $(k).checked; });
    return p;
  }

  function evaluate(plan, p) {
    var e = plan[p.horizon];
    var co2 = e.vkm * CO2_T_PER_MVKM;                       // tonnes
    var A = p.vtts * e.hours - plan.pay;                     // M€: hours in millions × €/h
    var B = p.health * e.active;                             // M€
    var C = -(co2 * p.carbon / 1e6 + p.airnoise * e.vkm + p.ksi * e.ksi);
    var D = -(p.land * plan.land * 1e4 / 1e6);               // ha → m², €/m²/yr → M€
    var E = -(1 + p.mu) * (plan.capex + plan.opex - plan.rev);
    var violations = [];
    if (p.cSafety && e.ksi > 0) violations.push("more KSI");
    if (p.cCarbon && co2 > 0) violations.push("more CO₂");
    if (p.cLand && plan.land > 0) violations.push("more land");
    return { A: A, B: B, C: C, D: D, E: E, W: A + B + C + D + E, violations: violations };
  }

  function fmt(x) { return (x >= 0 ? "+" : "−") + Math.abs(x).toFixed(2); }

  function render() {
    var p = params();
    SLIDERS.forEach(function (k) { $(k + "-v").textContent = $(k).value; });
    var results = PLANS.map(function (pl) { return { plan: pl, r: evaluate(pl, p) }; });
    var maxAbs = Math.max.apply(null, results.map(function (x) { return Math.abs(x.r.W); }).concat([1]));

    var ranked = results.slice().sort(function (a, b) {
      var fa = a.r.violations.length === 0, fb = b.r.violations.length === 0;
      if (fa !== fb) return fa ? -1 : 1;
      return b.r.W - a.r.W;
    });

    var bars = ranked.map(function (x, i) {
      var w = x.r.W, pct = Math.abs(w) / maxAbs * 50;
      var style = w >= 0 ? "left:50%;width:" + pct + "%" : "left:" + (50 - pct) + "%;width:" + pct + "%";
      var infeasible = x.r.violations.length > 0;
      return '<div class="bar-row' + (infeasible ? " infeasible" : "") + '">' +
        "<div>" + (i + 1) + ". " + x.plan.name.split(":")[0] +
        (infeasible ? ' <span class="pill-bad">violates: ' + x.r.violations.join(", ") + "</span>" : "") + "</div>" +
        '<div class="bar-track"><div class="bar-zero"></div><div class="bar-fill ' + (w >= 0 ? "pos" : "neg") + '" style="' + style + '"></div></div>' +
        '<div class="num">' + fmt(w) + " M€</div></div>";
    }).join("");
    $("bars").innerHTML = bars;

    var rows = results.map(function (x) {
      var r = x.r;
      return "<tr><td>" + x.plan.name + "</td>" +
        ["A", "B", "C", "D", "E", "W"].map(function (t) {
          return '<td class="num"' + (t === "W" ? ' style="font-weight:700"' : "") + ">" + fmt(r[t]) + "</td>";
        }).join("") + "</tr>";
    }).join("");
    $("breakdown").innerHTML = rows;
    renderSwitching(p, ranked[0].plan);
  }

  // The best feasible plan under parameters p.
  function winner(p) {
    var best = null, bestW = -Infinity, bestFeasible = false;
    PLANS.forEach(function (pl) {
      var r = evaluate(pl, p), feasible = r.violations.length === 0;
      if ((feasible && !bestFeasible) || (feasible === bestFeasible && r.W > bestW)) {
        best = pl; bestW = r.W; bestFeasible = feasible;
      }
    });
    return best;
  }

  function short(plan) { return plan.name.split(":")[0].split(" · ")[0]; }

  // For each assumption, the nearest value at which a different plan would win.
  function renderSwitching(p, top) {
    var items = [];
    SLIDERS.forEach(function (k) {
      var el = $(k), lo = parseFloat(el.min), hi = parseFloat(el.max), step = parseFloat(el.step);
      var label = el.previousElementSibling.firstChild.textContent.trim();
      [[1, hi], [-1, lo]].forEach(function (dir) {
        for (var v = p[k] + dir[0] * step; dir[0] > 0 ? v <= hi + 1e-9 : v >= lo - 1e-9; v += dir[0] * step) {
          var q = Object.assign({}, p); q[k] = v;
          var w = winner(q);
          if (w !== top) {
            items.push("<li><strong>" + label + "</strong> " + (dir[0] > 0 ? "above " : "below ") +
              (+v.toFixed(2)) + ": plan " + short(w) + " wins.</li>");
            break;
          }
        }
      });
    });
    var q = Object.assign({}, p); q.horizon = p.horizon === "short" ? "long" : "short";
    var wh = winner(q);
    if (wh !== top) items.push("<li><strong>Time horizon</strong> switched to the " + (q.horizon === "long" ? "long run (induced demand, mode shift)" : "short run (fixed demand)") + ": plan " + short(wh) + " wins.</li>");
    CHECKS.forEach(function (k) {
      var q2 = Object.assign({}, p); q2[k] = !p[k];
      var wc = winner(q2);
      if (wc !== top) items.push("<li><strong>" + $(k).parentNode.textContent.trim() + "</strong> " + (p[k] ? "dropped" : "added") + ": plan " + short(wc) + " wins.</li>");
    });
    $("switching").innerHTML = items.length ? items.join("") :
      "<li>No single assumption within the slider ranges changes the winner. The ranking is robust to each of them on its own.</li>";
    $("switch-top").textContent = short(top);
  }

  function applyPreset(key) {
    var pr = PRESETS[key];
    $("horizon").value = pr.horizon;
    SLIDERS.forEach(function (k) { $(k).value = pr[k]; });
    CHECKS.forEach(function (k) { $(k).checked = pr[k]; });
    render();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var sel = $("preset");
    Object.keys(PRESETS).forEach(function (k) {
      var o = document.createElement("option");
      o.value = k; o.textContent = PRESETS[k].label;
      sel.appendChild(o);
    });
    sel.addEventListener("change", function () { applyPreset(sel.value); });
    SLIDERS.concat(CHECKS).concat(["horizon"]).forEach(function (k) {
      $(k).addEventListener("input", render);
      $(k).addEventListener("change", render);
    });
    applyPreset("classic");
  });
})();
