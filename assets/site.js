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

  document.addEventListener("DOMContentLoaded", function () {
    buildToc();
    renderMath();
  });
})();
