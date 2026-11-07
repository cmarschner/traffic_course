// Shared page behaviour: math rendering and the on-page table of contents.
// Pages work without JavaScript; this only enhances them.
(function () {
  function slug(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 60);
  }

  function buildToc() {
    var toc = document.querySelector("nav.toc[data-auto] ol");
    if (!toc) return;
    document.querySelectorAll("main h2").forEach(function (h) {
      if (!h.id) h.id = slug(h.textContent);
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h.id;
      var label = h.cloneNode(true);
      label.querySelectorAll(".term").forEach(function (t) { t.remove(); });
      a.textContent = label.textContent.trim();
      li.appendChild(a);
      toc.appendChild(li);
    });
  }

  function renderMath() {
    if (typeof renderMathInElement !== "function") return;
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  }

  // The course menu: one list of every part of the course, kept here so that
  // all pages share it. Paths are relative to the site root.
  var MENU = [
    { title: "Start", links: [
      ["index.html", "Home"],
      ["syllabus.html", "Syllabus"],
      ["syllabus.html#paths", "Reading paths"],
      ["explorer.html", "Objective explorer"],
      ["citizens.html", "For citizens"]
    ] },
    { title: "Part I · The objective", links: [
      ["modules/m01-objective.html", "1 · What should a transport system optimize?"],
      ["modules/m02-valuing-access.html", "2 · Valuing time, access and choice"],
      ["modules/m03-externalities.html", "3 · Externalities and their prices"]
    ] },
    { title: "Part II · People and places", links: [
      ["modules/m04-demand-mode-choice.html", "4 · Travel demand and mode choice"],
      ["modules/m05-accessibility-land-use.html", "5 · Accessibility, land use and induced demand"],
      ["modules/m06-transit-active-modes.html", "6 · Public transport and active modes"]
    ] },
    { title: "Part III · Traffic engineering", links: [
      ["modules/m07-traffic-flow.html", "7 · Traffic flow, congestion and shockwaves"],
      ["modules/m08-capacity-los.html", "8 · Capacity and level of service"],
      ["modules/m09-junctions.html", "9 · Junctions"],
      ["modules/m10-simulation-validation.html", "10 · Simulation, calibration and verification"]
    ] },
    { title: "Part IV · Policy levers", links: [
      ["modules/m11-safety.html", "11 · Safety"],
      ["modules/m12-street-design.html", "12 · Street design"],
      ["modules/m13-pricing.html", "13 · Pricing and demand management"],
      ["modules/m14-appraisal.html", "14 · Appraisal and decision-making"],
      ["modules/m15-capstone.html", "15 · Capstone: appraise a corridor"]
    ] },
    { title: "Countries", links: [
      ["countries/index.html", "Overview"],
      ["countries/us.html", "United States"],
      ["countries/germany.html", "Germany"],
      ["countries/netherlands.html", "Netherlands"],
      ["countries/sweden.html", "Sweden"],
      ["countries/france.html", "France"],
      ["countries/japan.html", "Japan"],
      ["countries/singapore.html", "Singapore"],
      ["countries/more.html", "More countries"]
    ] },
    { title: "Reference", links: [
      ["sources/index.html", "Sources & translations"],
      ["about.html", "About"]
    ] }
  ];

  // The site root, read from this script's own address (…/assets/site.js).
  function siteRoot() {
    var s = document.querySelector('script[src*="assets/site.js"]');
    return s ? s.src.replace(/assets\/site\.js.*$/, "") : "";
  }

  function buildMenu() {
    var header = document.querySelector(".site-header .inner");
    if (!header) return;
    var root = siteRoot();
    var here = location.href.split("#")[0].split("?")[0];
    if (/\/$/.test(here)) here += "index.html";

    var button = document.createElement("button");
    button.className = "menu-button";
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "course-menu");
    button.innerHTML = '<span class="menu-icon" aria-hidden="true"></span>Course';

    var panel = document.createElement("nav");
    panel.className = "course-menu";
    panel.id = "course-menu";
    panel.setAttribute("aria-label", "Course contents");
    panel.hidden = true;
    var grid = document.createElement("div");
    grid.className = "course-menu-inner";
    MENU.forEach(function (group) {
      var sec = document.createElement("section");
      var h = document.createElement("h2");
      h.textContent = group.title;
      sec.appendChild(h);
      var ul = document.createElement("ul");
      group.links.forEach(function (l) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = root + l[0];
        a.textContent = l[1];
        if (a.href === here) a.setAttribute("aria-current", "page");
        li.appendChild(a);
        ul.appendChild(li);
      });
      sec.appendChild(ul);
      grid.appendChild(sec);
    });
    panel.appendChild(grid);

    function setOpen(open) {
      panel.hidden = !open;
      button.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
    }
    button.addEventListener("click", function () { setOpen(panel.hidden); });
    panel.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) { setOpen(false); button.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (!panel.hidden && !panel.contains(e.target) && !button.contains(e.target)) setOpen(false);
    });

    header.insertBefore(button, header.querySelector(".site-nav"));
    header.parentNode.appendChild(panel);
    document.querySelector(".site-header").classList.add("has-menu");
  }

  // Print the collapsed "under the hood" layers too.
  window.addEventListener("beforeprint", function () {
    document.querySelectorAll("details.method").forEach(function (d) { d.open = true; });
  });

  document.addEventListener("DOMContentLoaded", function () {
    buildMenu();
    buildToc();
    renderMath();
  });
})();
