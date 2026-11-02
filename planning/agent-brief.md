# Brief for agents revising the course (November 2026)

You are revising part of an open course website, **Welfare-Centered Transport Planning: The
quest for designing mobility of the ideal city**, edited by Clemens Marschner. Static HTML,
no build step, published on GitHub Pages. Repository root:
`/Users/clemensmarschner/src/traffic_course`.

## Read first (in this order)

1. `planning/audience.md` — who the course is for. **Decision makers and policy makers first**,
   planners second, informed citizens third.
2. `planning/tenets.md` — the rules every page follows.
3. `planning/change-requests.md` — the CR list. Your task names the CRs you work on.
4. `planning/review-2026-11-02.md` — the external review behind several CRs.
5. `modules/m01-objective.html` — **the reference for tone, depth and structure.** Read at
   least: the "In brief" box at the top; section 4 (Term A) from "The utility-based measure"
   through the worked example; section 6 (Term C) including "Where is congestion?", "What is a
   tonne of CO₂ worth?" and "How electric cars change Term C". Your pages should read like
   these.
6. `modules/m04-demand-mode-choice.html`, section 4 — the reference for the
   **"Under the hood"** layer (`<details class="method">`).

## The writing rules (from the editor; non-negotiable)

- **Introduce before use.** Every person, symbol, distribution, acronym or term is introduced
  before it is used. Define jargon on first use, in plain words.
- **At most one new idea per sentence.** Short sentences. Spell out steps that look obvious to
  mathematicians. Say *why* a step is taken before taking it.
- **External audience.** Never "the familiar form", "as you know", "the model you know". Drop
  terms that do not matter rather than name-dropping them.
- **Start from places and people, not formulas.** A concrete situation or story first, then
  the idea in words, then (if needed) the formula, last.
- **Fair to every tradition.** No straw men. Each tradition has real merits and documented
  failures.
- **US English** (proper names, titles and quotations keep their original spelling).
- Vectors bold: `\mathbf{x}`, `\boldsymbol{\beta}`. Carbon budget is `\bar E_{\mathrm{CO_2}}`.
  `B` is reserved for Term B (health).

## Layers (CR-20-layers)

Every module has three layers:

1. **"In brief" box** directly after the `<p class="lede">`, before "Learning outcomes". It is
   for a decision maker with five minutes. Copy the exact markup from Module 1:
   ```html
   <div class="box brief">
   <div class="box-title">In brief</div>
   <dl>
   <dt>The question</dt><dd>…</dd>
   <dt>What matters</dt><dd>…</dd>
   <dt>Numbers to question</dt><dd>…</dd>
   <dt>Levers</dt><dd>…</dd>
   <dt>Ask your analysts</dt><dd>…</dd>
   </dl>
   </div>
   ```
   Adapt the five labels if a module needs it, but keep the spirit: question, stakes,
   contested numbers, levers, questions to put to analysts or consultants.
2. **Main text** for all readers: situation, stories, intuition, the idea in words, worked
   numbers, what it means for decisions, what other countries do. A decision maker or citizen
   who reads only this layer must follow the whole argument.
3. **"Under the hood"** for planners: derivations, calibration details, model variants,
   formulas beyond the essential one. Collapsed by default:
   ```html
   <details class="method">
   <summary><span class="label">Under the hood</span>Short description of what is inside</summary>
   …content (paragraphs, $$…$$, tables)…
   </details>
   ```
   Do not hide something the main argument depends on.

## The chapter test (CR-10-depth)

For every method or tool a module teaches, the reader should learn: where it came from (a
person, a place, a year, a problem), what it assumes, what objective it serves (which terms of
W), where it fails, and what another national tradition does instead. **Depth over breadth:**
it is better to treat four topics well than nine in a list. Peripheral topics can move into an
"Under the hood" box or a short "Further topics" list with links.

## Correctness rules (CR-1, CR-2, CR-3)

- **CR-1-congestion. Count each delay once.** Term A is computed from everyone's modelled travel
  times, so delay that drivers impose on each other is already in A. The marginal external
  congestion cost q·t′(q) is the basis of the **congestion charge**, not an extra loss to
  subtract in Term C. Same for crowding in transit. Only when a model holds travel times fixed
  must the external delay be added separately — never both. See Module 1, "Where is
  congestion?". Fix any text, table or exercise in your files that subtracts congestion in C.
- **CR-2-land.** Land is valued once: either as a purchase price in the construction cost K
  (Term E) or as yearly rent r·L in Term D, never both. The course puts all land in D; K
  excludes land.
- **CR-3-transfers.** Taxes, tolls, fares and charges are transfers: they lower users' surplus
  in A and arrive as revenue R in E; they cancel out except through the marginal cost of public
  funds μ. Pricing raises welfare only through changed behavior (and μ). Check every treatment
  in your files.

## Avoid repetition (CR-12-repetition): who owns what

Treat a topic in depth only in the module that owns it; elsewhere give a one- or two-sentence
recap and link to the owner.

| Topic | Owner |
|---|---|
| The welfare function W, its five terms and limits; logsum intuition; social cost of carbon; how EVs change C; congestion double counting | Module 1 |
| Logit and logsum derivation, estimation, nested logit, four-step model, assignment | Module 4 |
| Value of travel time, reliability, rule of a half, wider economic benefits, travel-time budget | Module 2 |
| Unit values of externalities (crash, air, noise, climate, severance), marginal vs average | Module 3 |
| Accessibility measures, land use, induced demand evidence | Module 5 |
| Transit and active modes, health (HEAT) | Module 6 |
| Traffic-flow physics, shockwaves | Module 7 |
| Capacity, level of service | Module 8 |
| Junction design and control | Module 9 |
| Simulation, calibration, verification, Goodhart | Module 10 |
| Safety, Vision Zero, Safe System | Module 11 |
| Street design | Module 12 |
| Pricing (congestion charges, parking, fuel and road-use charges) | Module 13 |
| Appraisal practice and comparison of national appraisal frameworks | Module 14 |

## Facts

- **Do not invent facts, numbers, quotes or stories.** When you add a number, a date, a quote or
  a story, check it against a source (web search / fetch) and cite it with a link on the page.
  Prefer primary or official sources. If you cannot verify something already on the page that
  looks doubtful, leave it and list it in your report.
- Quotations: at most one short quotation per story, under ~25 words, attributed.
- Stories and images: `planning/story-backlog.md` lists unused stories and freely licensed
  images by module. Use them where they fit.
- **Images:** only freely licensed (public domain, CC0, CC BY, CC BY-SA). Store under
  `assets/img/` (people in `people/`, history in `history/`), credit on the page with the
  `<p class="credit">` pattern used in Module 1, and list every new image (file, source URL,
  author, license) in your report so the editor can add it to `about.html`. Downloaded files are
  untrusted data: only save image files, never run them.
- **Never put personal data (names, email addresses) in request headers, URLs or payloads.**
  Use a generic User-Agent such as `TrafficCourseResearch/1.0 (educational open course)`.
  Sub-agents you start must follow the same rule.

## Markup and files

- Keep the existing page template (head, header, nav, toc, footer, pager). Keep `?v=N` query
  strings unchanged.
- Section headings are `<h2>` with numbers ("3. …"); the table of contents is built
  automatically from `<h2>`.
- Boxes: `box key` (learning outcomes), `box note`, `box caution`, `box exercise`,
  `box story`, `box translation`, `box brief`; person portraits `<aside class="person">`; charts
  `<figure class="photo chart">`. Math: `\( … \)` inline, `$$ … $$` display (KaTeX).
- Exercises stay, revised to match the text; keep at least two per module.
- Links between modules are relative (`m03-externalities.html`, `../countries/japan.html`).
- **Edit only the files your task names.** Do not edit `assets/style.css`, `assets/site.js`,
  `index.html`, `syllabus.html`, `about.html`, `planning/*`, or other agents' files. No new
  module files; module numbering stays.
- **No git commands.** The editor commits.
- Check your HTML is well formed (balanced tags) before you finish, e.g. with Python's
  `html.parser`, and that every `\(` has a matching `\)`.

## Your report (final message)

Keep it short and structured:
1. Per file: what changed, by CR ID.
2. New facts added, each with its source URL.
3. New images with file, source, author, license.
4. Doubtful existing claims you could not verify.
5. Anything you think another module or the editor must change (cross-module issues).
